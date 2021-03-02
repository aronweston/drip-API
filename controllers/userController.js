import mongoose from 'mongoose';
import colors from 'colors';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';

// @desc  Get all users
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
    console.log(`GET /users/:id - ${res.statusCode} -${err}`.red.inverse);
    throw new Error(err);
  }
});

export default { getAllUsers, getUserById };
