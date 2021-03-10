import express from 'express';
const router = express.Router();
import {
  createOrder,
  getOrderById,
  getAllOrders,
  orderPay,
  paymentSuccess,
  // updateOrderById,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/success/').post(protect, paymentSuccess); //PROTECT
router.route('/').post(protect, createOrder).get(protect, getAllOrders);
router.route('/pay/:id').get(orderPay); //NEEDS TO BE PROTECTED, OFF ON TESTING
router.route('/:id').get(protect, getOrderById);

export default router;
