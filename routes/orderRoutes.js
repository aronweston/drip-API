import express from 'express';
const router = express.Router();
import {
  // createOrder,
  getAllOrders,
  // getOrderById,
  // updateOrderById,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(protect, admin, getAllOrders);

export default router;
