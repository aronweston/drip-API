import mongoose from 'mongoose';
import colors from 'colors';
import asyncHandler from 'express-async-handler';
import Coffee from '../models/Coffee.js';
import Roaster from '../models/Roaster.js';

// @desc  READ: Get all coffee
// @route GET /coffee
// @access PUBLIC

export const getAllCoffee = asyncHandler(async (req, res) => {
  const coffee = await Coffee.find({}).populate(
    'roaster',
    'name about logo location'
  );
  if (coffee.length > 0) {
    res.json(coffee);
  } else {
    res.status(404);
    throw new Error('No Coffee Found');
  }
});

// @desc  READ: Get a specific roaster
// @route GET /coffee/:id
// @access PUBLIC

export const getCoffeeById = asyncHandler(async (req, res) => {
  const coffee = await Coffee.findById(req.params.id).populate(
    'roaster',
    'name about logo location products'
  );
  if (coffee) {
    res.json(coffee);
  } else {
    res.status(404);
    throw new Error('coffee not found');
  }
});

// @desc  CREATE: Create a coffee
// @route POST /coffee
// @access PRIVATE
export const createCoffee = asyncHandler(async (req, res) => {
  try {
    const { title, price, roaster: roasterID, stockQty } = req.body;

    const roaster = await Roaster.findById(roasterID);

    if (roaster) {
      // Check if the product already exists under the product name
      const productFound = roaster.products.find((p) => title === p.title);
      console.log(productFound);
      if (productFound) {
        res.status(400);
        throw new Error('Product already exists');
      }
    } else {
      res.status(404);
      throw new Error('Roaster does not exist');
    }

    const coffee = await Coffee.create({
      title,
      price,
      roaster: roasterID,
      stockQty,
    });

    roaster.products.push({
      _id: coffee.id,
      title: coffee.title,
      price: coffee.price,
      stockQty: coffee.stockQty,
    });

    if (coffee) {
      roaster.save();
      console.log(roaster);

      res.status(201).json({
        _id: coffee.id,
        title: coffee.title,
        price: coffee.price,
        roaster: coffee.roaster,
        stockQty: coffee.stockQty,
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

//@desc  Delete a coffee and all coffees from the Roaster schema
//@route DELETE /coffee/:id
//@access PRIVATE(ADMIN)
export const removeCoffee = asyncHandler(async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    const roaster = await Roaster.findById(coffee.roaster._id);
    if (coffee && roaster.products.length > 0) {
      const newProducts = roaster.products.filter(
        (c) => String(c._id) !== String(coffee._id)
      );
      roaster.products = newProducts;
      roaster.save();
      coffee.remove();
      res.json({ c: coffee, new: newProducts, r: roaster });
    } else {
      res.status(404);
      throw new Error('Coffee not found');
    }
  } catch (error) {
    res.status(404);
    throw new Error('Coffee not found');
  }
});
