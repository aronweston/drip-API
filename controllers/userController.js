import mongoose from 'mongoose';
import colors from 'colors';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';

// @desc  LOGIN: Auth user
// @route POST /login
// @access PUBLIC

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
});

// @desc  CREATE: Create user
// @route POST /users
// @access PUBLIC
//TODO: get the error messages for a dup email, wrong format email and incorrect password length to format correctly in the model.
export const createUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.create({
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      joined: new Date(user.createdAt).toLocaleDateString(),
    });
    console.log(`POST /users/`.green.inverse);
  } else {
    res.status(400);
    console.log('POST /users/:id'.red.inverse);
    throw new Error(err);
  }
});

// @desc  READ: Get all users
// @route GET /users
// @access PUBLIC
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  if (users) {
    res.json(users);
    console.log('GET /users'.green.inverse);
  } else {
    console.log('GET /users'.red.inverse);
    res.status(404);
    throw new Error(users.error);
  }
});

// @desc  UPDATE: Update a user profile
// @route PUT /users/:id
// @access PUBLIC
export const updateUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.email = req.body.email || user.email;
    if (req.body.password) user.password = req.body.password;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      password: updatedUser.password, //remove this later
      joined: new Date(updatedUser.createdAt).toLocaleDateString(),
    });

    console.log(`PUT /users/:id`.green.inverse);
  } else {
    res.status(404);
    console.log('PUT /users/:id'.red.inverse);
    throw new Error(err);
  }
});

// @desc  Get user by ID
// @route GET /users/:id
// @access PUBLIC
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
    console.log(`GET /users/:id`.green.inverse);
  } else {
    const err = 'user not found';
    res.status(404);
    console.log('GET /users/:id'.red.inverse);
    throw new Error(err);
  }
});
