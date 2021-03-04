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
import { protect } from '../middleware/authMiddleware.js';

//PUBLIC
router.route('/new').post(createUser);
router.post('/login', authUser);

// PRIVATE
router.route('/').get(protect, getAllUsers);
router.route('/:id').get(protect, getUserById);
router.route('/profile').get(protect, getUserProfile);

export default router;
