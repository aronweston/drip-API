import Stripe from 'stripe';
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
//models
import Order from '../models/Order.js';
import Coffee from '../models/Coffee.js';
import User from '../models/User.js';

//Stripe
dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// @desc  CREATE: Create an order
// @route POST /orders
// @access PRIVATE
export const createOrder = asyncHandler(async (req, res) => {
  const { cartItems, totalPrice, delivery } = req.body;

  if (cartItems.length === 0) {
    res.status(400);
    throw new Error('The cart is empty');
  } else {
    // PRICE CONFIRMATION
    const coffeeIds = cartItems.map(({ coffee, qty }) => [coffee, qty]);

    const coffeePrices = [];
    for (let i = 0; i < coffeeIds.length; i++) {
      let coffee = await Coffee.findOne({ _id: coffeeIds[i][0] });
      let qty = coffeeIds[i][1];
      coffeePrices.push(coffee.price * qty);
    }
    const backendPrice = coffeePrices.reduce((acc, price) => acc + price);

    //CHECK PRICES
    if (backendPrice !== totalPrice) {
      res.status(401);
      throw new Error('Prices are not correct');
    }
    console.log({ backend: backendPrice, front: totalPrice });

    //CREATE ORDER
    const order = await Order.create({
      user: req.user._id,
      totalPrice,
      cartItems,
      delivery,
    });

    if (order) {
      res.json(order);
    } else {
      res.status(400);
      throw new Error('Order not created');
    }
  }
});

// @desc  Successful payment
// @route POST /order/success
// @access PRIVATE
export const paymentSuccess = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.body.id);
  if (order) {
    //set is paid to true
    order.isPaid = true;
    order.paidAt = Date.now();
    const id = String(order._id);
    order.reference =
      id.substring(0, 4) + id.substring(id.length - 4, id.length);
    order.save();

    //Subtract quantity from stock
    const coffeeData = order.cartItems.map(({ coffee, qty }) => [coffee, qty]);
    for (let i = 0; i < coffeeData.length; i++) {
      const coffee = await Coffee.findOne({ _id: coffeeData[i][0] });
      const qty = coffeeData[i][1];
      coffee.stockQty -= qty;
      coffee.save();
    }

    res.status(201).json(order);
  } else {
    res.status(401);
    throw new Error('Order not found');
  }
});

// @desc  Pay order
// @route POST /order/pay/:id
// @access PRIVATE
export const orderPay = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  const { totalPrice, id, delivery, user } = order;

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  //GET USER FROM ORDER
  const getUser = await User.findById(user);

  if (!getUser) {
    res.status(404);
    throw new Error('User not found');
  }

  //FIND STRIPE USER
  const customer = await stripe.customers.retrieve(getUser.stripeId);
  console.log(customer);
  if (!customer) {
    res.status(404);
    throw new Error('Stripe user not found');
  }

  // //CREATE A PAYMENT INTENT
  const paymentIntent = await await stripe.paymentIntents.create({
    amount: totalPrice * 100,
    currency: 'aud',
    customer: customer.id,
    receipt_email: customer.email,
    metadata: {
      integration_check: 'accept_a_payment',
      order_id: id,
    },
    shipping: customer.shipping
      ? customer.shipping
      : (customer.shipping = {
          name: `${delivery.firstName} ${delivery.lastName}`,
          address: {
            line1: delivery.line_1,
            city: delivery.suburb,
            state: delivery.state,
            postal_code: delivery.postCode,
            country: 'AU',
          },
        }),
    statement_descriptor: 'drip coffee',
  });

  if (order) {
    res.status(201).json(paymentIntent.client_secret);
  } else {
    res.status(400);
    throw new Error('Payment error');
  }
});

// @desc  Get all orders
// @route GET /orders
// @access ADMIN
export const getAllOrders = asyncHandler(async (req, res) => {
  const order = await Order.find({});
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc  Get order by id
// @route GET /orders/:id
// @access PRIVATE
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'email');
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
