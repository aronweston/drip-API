import mongoose from 'mongoose';
import colors from 'colors';
import asyncHandler from 'express-async-handler';
import Coffee from '../models/Coffee.js';
import Roaster from '../models/Roaster.js';

// @desc  READ: Get all coffee
// @route GET /coffee
// @access PUBLIC

export const getAllCoffee = asyncHandler(async (req, res) => {
  try {
    const coffee = await Coffee.find({});
    if (coffee) res.json(coffee);
  } catch (error) {
    console.log('GET /coffee'.red.inverse, error);
    res.status(404);
    throw new Error('coffee not found');
  }
});

// @desc  READ: Get a specific roaster
// @route GET /coffee/:id
// @access PUBLIC

export const getCoffeeById = asyncHandler(async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    if (coffee) res.json(coffee);
  } catch (error) {
    console.log('GET /coffees/:id'.red.inverse, error);
    res.status(404);
    throw new Error('coffee not found');
  }
});

// @desc  CREATE: Create a coffee
// @route POST /coffee
// @access PRIVATE
export const createCoffee = asyncHandler(async (req, res) => {
  try {
    const { title, price, roaster: roasterID } = req.body;

    const roaster = await Roaster.findById(roasterID);

    // Check if the product already exists under the product name
    const productFound = roaster.products.find((p) => title === p.title);

    console.log(productFound);

    if (productFound) {
      res.status(400);
      throw new Error('Product already exists');
    }

    const coffee = await Coffee.create({
      title,
      price,
      roaster: roasterID,
    });

    roaster.products.push({
      _id: coffee.id,
      title: coffee.title,
      price: coffee.price,
    });

    if (coffee) {
      roaster.save();
      console.log(roaster);

      res.status(201).json({
        _id: coffee.id,
        title: coffee.title,
        price: coffee.price,
        roasterID: coffee.roaster,
      });
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//@desc UPDATE: Update a coffee
//@route PUT /coffee/:id
//@access PRIVATE

export const updateCoffee = asyncHandler(async (req, res) => {
  try {
    const coffee = await Coffee.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(coffee);
  } catch (error) {
    res.status(404);
    throw new Error('Coffee not found');
  }
});

//@desc UPDATE: Update a specific roaster
//@route PUT /roaster/update
//@access PRIVATE
export const removeCoffee = asyncHandler(async (req, res) => {
  try {
    const coffee = await Coffee.findById({ _id: req.params.id });
    if (coffee) {
      coffee.remove();
      res.json('Coffee deleted');
    } else {
      res.status(404);
      throw new Error('Coffee not found');
    }
  } catch (error) {
    res.status(404);
    throw new Error('Coffee not found');
  }
});
