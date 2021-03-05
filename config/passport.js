import passport from 'passport';
import passportLocal from 'passport-local';
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
const LocalStrategy = passportLocal.Strategy;

export const login = function (passport) {
  passport.use(
    new LocalStrategy({ userNameField: email }, (email, password, done) => {})
  );
};

// export const authUser = asyncHandler(async (req, res) => {

//     await passport.use(
//         const new LocalStrategy
//     );

//   const user = await User.findOne({ email });

//   if (user && (await user.checkPassword(password))) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       password: user.password,
//       token: genToken(user._id),
//     });
//   } else {
//     res.status(401);
//     console.log('POST /users/auth'.red.inverse);
//     throw new Error('Invalid email or password');
//   }
// });
