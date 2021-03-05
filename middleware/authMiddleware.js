import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password -email');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('No auth - bad token');
    }
    console.log('Token Found'.inverse.green);
  }

  if (!token) {
    res.status(401);
    throw new Error('No token');
  }
});

export const admin = async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    console.error('No token'.inverse.red);
    res.status(401);
    throw new Error('401 - Not Authorised');
  }
};
