import mongoose from 'mongoose';
import colors from 'colors';
import asyncHandler from 'express-async-handler';
import Roaster from '../models/Roaster.js';

// @desc  CREATE: Create a roaster
// @route POST /roaster
// @access PUBLIC
export const createRoaster = asyncHandler(async (req, res) => {
  const { name, about, logo, location } = req.body;

  const newRoaster = await Roaster.create({
    name,
    about,
    logo,
    location,
  });

  if (newRoaster) {
    res.status(201).json({
      _id: newRoaster.id,
      name: newRoaster.name,
      logo: newRoaster.logo,
      location: newRoaster.location,
      joined: new Date(newRoaster.createdAt).toLocaleDateString(),
    });

    console.log('POST /roaster'.green.inverse);
  } else {
    res.status(400);
    console.log('POST /roaster'.red.inverse);
    throw new Error('User not created');
  }
});

// @desc  READ: Get all roasters
// @route GET /roaster
// @access PUBLIC

export const getAllRoasters = asyncHandler(async (req, res) => {
  const roasters = await Roaster.find({});

  if (roasters) {
    res.json(roasters);
    console.log('GET /roasters'.green.inverse);
  } else {
    console.log('GET /roasters'.red.inverse);
    res.status(404);
    throw new Error(roasters.error);
  }
});

// @desc  READ: Get a specific roaster
// @route GET /roaster/:id
// @access PUBLIC

export const getRoasterById = asyncHandler(async (req, res) => {
  const roaster = await Roaster.findById(req.params.id);
  if (roaster) {
    res.json(roaster);
    console.log('GET /roasters/:id'.green.inverse);
  } else {
    console.log('GET /roasters/:id'.red.inverse);
    res.status(404);
    throw new Error(roasters.error);
  }
});
