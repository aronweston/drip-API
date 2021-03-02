import mongoose from 'mongoose';
import colors from 'colors';
import asyncHandler from 'express-async-handler';
import Roaster from '../models/Roaster.js';

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

export default { getRoasterById, getAllRoasters };
