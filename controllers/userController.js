import mongoose from 'mongoose';
import colors from 'colors';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
import { genToken } from '../utils/genToken.js';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// @desc  LOGIN: Auth user
// @route POST /users/auth
// @access PUBLIC

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) {
      res.status(401);
      throw new Error('Email is required');
    } else if (!password) {
      res.status(401);
      throw new Error('Password is required');
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404);
      throw new Error('Incorrect password or email');
    }

    const checkPassword = await user.checkPassword(password);
    if (!checkPassword) {
      res.status(401);
      throw new Error('Incorrect password or email');
    } else {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        stripeId: user.stripeId,
        password: user.password,
        token: genToken(user._id),
      });
    }
  } catch (error) {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc  CREATE: Create user
// @route POST /users
// @access PUBLIC
//TODO: get the error messages for a dup email, wrong format email and incorrect password length to format correctly in the model.
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const stripeCustomer = await stripe.customers.create({ email });

    const user = await User.create({
      name,
      email,
      password,
      stripeId: stripeCustomer.id,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        stripeId: user.stripeId,
        password: user.password,
        joined: new Date(user.createdAt).toLocaleDateString(),
      });
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// @desc  UPDATE: Update a user profile
// @route PUT /users/:id
// @access PUBLIC
export const updateUserById = asyncHandler(async (req, res) => {
  const { name, email, password, billing, delivery } = req.body;

  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.billing = billing || user.billing;
      user.delivery = delivery || user.shipping;
      if (password) user.password = password;

      //update user in database
      const updatedUser = await user.save();

      // Update user in stripe
      if (updatedUser) {
        const { name, email, billing, delivery } = updatedUser;
        const customer = await stripe.customers.update(user.stripeId, {
          name,
          email,
          address: {
            line1: billing.line_1,
            line2: billing.line_2,
            city: billing.suburb,
            state: billing.state,
            postal_code: billing.postCode,
            country: 'AU',
          },
          shipping: {
            name: `${delivery.firstName} ${delivery.lastName}`,
            address: {
              line1: delivery.line_1,
              line2: delivery.line_2,
              city: delivery.suburb,
              state: delivery.state,
              postal_code: delivery.postCode,
              country: 'AU',
            },
          },
        });
        if (!customer) {
          console.log(customer.raw);
        }
        res.json({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          delivery: updatedUser.delivery,
          billing: updatedUser.billing,
          stripeId: updatedUser.stripeId,
          password: updatedUser.passwordDigest, //remove this later
          joined: new Date(updatedUser.createdAt).toLocaleDateString(),
        });
      }
    }
  } catch (error) {
    res.status(404);
    console.log(error);
    throw new Error('User not updated');
  }
});

// @desc  Get user by ID
// @route GET /users/:id
// @access PUBLIC
export const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) res.json(user);
  } catch (error) {
    res.status(404);
    console.error(error);
    throw new Error('User not found');
  }
});

// @desc  Get logged in user
// @route GET /users/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        delivery: user.delivery,
        billing: user.billing,
        stripeId: user.stripeId,
        isAdmin: user.isAdmin,
        joined: new Date(user.createdAt).toLocaleDateString(),
      });
    }
  } catch (error) {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc  READ: Get all users
// @route GET /users
// @access PUBLIC
export const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    if (users) res.json(users);
  } catch (error) {
    res.status(404);
    console.error(error);
    throw new Error('Users not found');
  }
});
