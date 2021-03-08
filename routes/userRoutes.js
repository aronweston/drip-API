import express from 'express';
const router = express.Router();
import {
  authUser,
  createUser,
  getAllUsers,
  getUserProfile,
  getUserById,
  updateUserById,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//PUBLIC
router.route('/register').post(createUser);
router.post('/login', authUser);

// PRIVATE
router.route('/profile').get(protect, getUserProfile);
router.route('/profile/:id').put(updateUserById);

router.route('/').get(protect, admin, getAllUsers);
router.route('/:id').get(protect, admin, getUserById);

export default router;
