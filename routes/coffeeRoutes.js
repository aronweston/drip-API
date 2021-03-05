import express from 'express';
const router = express.Router();
import {
  createCoffee,
  getAllCoffee,
  getCoffeeById,
  removeCoffee,
  updateCoffee,
} from '../controllers/coffeeController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//PUBLIC
router.route('/').get(getAllCoffee);
router
  .route('/:id')
  .get(getCoffeeById)
  .put(protect, admin, updateCoffee)
  .delete(protect, admin, removeCoffee);
router.route('/new').post(protect, admin, createCoffee);

//
// //PRIVATE
// router.route('/new').post(adminOnly, createRoaster);

export default router;
