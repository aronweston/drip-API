import Stripe from 'stripe';
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
//models
import Order from '../models/Order.js';
import Coffee from '../models/Coffee.js';
//Stripe
dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// @desc  CREATE: Create an order
// @route POST /orders
// @access PRIVATE
export const createOrder = asyncHandler(async (req, res) => {
  const { cartItems, totalPrice, delivery, billing } = req.body;

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
      delivery,
      billing,
      totalPrice,
      cartItems,
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
  const order = await Order.findById(req.body._id);
  //set is paid to true
  order.isPaid = true;
  const id = String(order.id);
  order.reference = id.substring(0, 4) + id.substring(id.length - 4, id.length);
  order.save();

  //Subtract quantity from stock
  const coffeeData = order.cartItems.map(({ coffee, qty }) => [coffee, qty]);
  for (let i = 0; i < coffeeData.length; i++) {
    let coffee = await Coffee.findOne({ _id: coffeeData[i][0] });
    let qty = coffeeData[i][1];
    coffee.stockQty -= qty;
    coffee.save();
  }

  order.populate('');

  res.json(order);
});

// @desc  Pay order
// @route GET /order/pay/:id
// @access PRIVATE
export const orderPay = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  //FIND STRIPE USER
  const customer = await stripe.customers.retrieve(req.user.stripeId);
  if (!req.user.stripeId) {
    res.status(404);
    throw new Error('Stripe user not found');
  }

  const { totalPrice, id, delivery } = order;

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
            line2: delivery.line_2,
            city: delivery.suburb,
            state: delivery.state,
            postal_code: delivery.postCode,
            country: 'AU',
          },
        }),
    statement_descriptor: 'drip coffee',
  });

  if (order) {
    console.log(order);
    res.status(201).json(paymentIntent.client_secret);
  } else {
    res.status(400);
    throw new Error('Payment error');
  }
});

// @desc  READ: Get all orders
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

// @desc  READ: Get order by id
// @route POST /orders/:id
// @access PRIVATE
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'email billing'
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
