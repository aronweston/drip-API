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
  const { cartItems } = req.body;

  if (cartItems.length === 0) {
    res.status(400);
    throw new Error('The cart is empty');
  } else {
    const order = await Order.create({
      user: req.user._id,
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

// @desc  READ: Get  all orders
// @route POST /orders/:id
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

// @desc  Pay order
// @route GET /order/pay/:id
// @access PRIVATE

// - get the order id
// - get the order that is associated with params id
// - populate with each final price of the orderItems
// - send that back as an intent

export const orderPay = asyncHandler(async (req, res) => {
  //send the amount to the server; need to get the order data in here and do the calculations of all the products and quantity in the order and calculate; then set that to the amount as the final price - this is either equal to the front end or not - if not, return an error
  // const {amount} = req.body

  // const order = await Order.findById(req.params.id).populate(
  //   'user',
  //   'email stripeId'
  // );

  // if (!order) {
  //   res.status(404);
  //   throw new Error('Order not found');
  // }

  // TODO: check if the customer exists on stripe
  // let customer = await stripe.customers.retrieve(stripeId);
  // if (!customer) {
  //   customer = await stripe.customers.create({
  //     email: token.email,
  //     source: token.id,
  //   });

  //returns a client secret for this particular order
  const charge = await await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'aud',
    // receipt_email: order.user.email,
    // customer: order.user.stripeId,
    metadata: {
      integration_check: 'accept_a_payment',
      // order_id: order._id,
    },
    // idempotencyKey: order._id,
    statement_descriptor: 'drip coffee',
  });

  console.log(charge);

  if (charge) {
    res.status(201).json({ client_secret: charge.client_secret });
  } else {
    res.status(400);
    throw new Error('Payment error');
  }
});
