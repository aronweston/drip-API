import express from 'express';
const router = express.Router();
import {
  createOrder,
  getOrderById,
  getAllOrders,
  orderPay,
  // getOrderById,
  // updateOrderById,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, createOrder).get(protect, getAllOrders);
router.route('/pay').get(orderPay);
router.route('/:id').get(protect, getOrderById);
// router.route('/pay/:id').get(protect, orderPay);

export default router;
