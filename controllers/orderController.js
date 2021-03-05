import mongoose from 'mongoose';
import colors from 'colors';
import Order from '../models/Order.js';
import asyncHandler from 'express-async-handler';

// @desc  READ: Get all Orders
// @route GET /orders
// @access PUBLIC
export const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({});
    if (orders) res.json(orders);
  } catch (error) {
    res.status(404);
    console.error(error);
    throw new Error('Orders not found');
  }
});

// @desc  CREATE: Create user
// @route POST /users
// @access PUBLIC
//TODO: get the error messages for a dup email, wrong format email and incorrect password length to format correctly in the model.
// export const createUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       res.status(400);
//       throw new Error('User already exists');
//     }

//     const user = await User.create({
//       email,
//       password,
//     });

//     if (user) {
//       res.status(201).json({
//         _id: user._id,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         password: user.password,
//         joined: new Date(user.createdAt).toLocaleDateString(),
//       });
//     }
//   } catch (error) {
//     res.status(400);
//     throw new Error(err);
//   }
// });

// // @desc  UPDATE: Update a user profile
// // @route PUT /users/:id
// // @access PUBLIC
// export const updateUserById = asyncHandler(async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (user) {
//       user.email = req.body.email || user.email;
//       if (req.body.password) user.password = req.body.password;

//       const updatedUser = await user.save();

//       res.json({
//         _id: updatedUser._id,
//         email: updatedUser.email,
//         isAdmin: updatedUser.isAdmin,
//         password: updatedUser.passwordDigest, //remove this later
//         joined: new Date(updatedUser.createdAt).toLocaleDateString(),
//       });
//     }
//   } catch (error) {
//     res.status(404);
//     console.error(error);
//     throw new Error('User not updated');
//   }
// });

// // @desc  Get user by ID
// // @route GET /users/:id
// // @access PUBLIC
// export const getUserById = asyncHandler(async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (user) res.json(user);
//   } catch (error) {
//     res.status(404);
//     console.error(error);
//     throw new Error('User not found');
//   }
// });
