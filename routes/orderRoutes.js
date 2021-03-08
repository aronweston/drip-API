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

router.route('/').post(protect, createOrder).get(protect, getAllOrders);
router.route('/pay/:id').get(protect, orderPay);
router.route('/:id').get(protect, getOrderById);
router.route('/success').post(protect, paymentSuccess);
// router.route('/pay/:id').get(protect, orderPay);

export default router;
