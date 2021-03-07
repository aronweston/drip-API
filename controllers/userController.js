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
    const user = await User.findOne({ email });
    if (user && (await user.checkPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
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
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const stripeId = await stripe.customers.create({ email });

    console.log(stripeId);

    const user = await User.create({
      email,
      password,
      stripeId: stripeId.id,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
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
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.email = req.body.email || user.email;
      if (req.body.password) user.password = req.body.password;

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        password: updatedUser.passwordDigest, //remove this later
        joined: new Date(updatedUser.createdAt).toLocaleDateString(),
      });
    }
  } catch (error) {
    res.status(404);
    console.error(error);
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
        email: user.email,
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
