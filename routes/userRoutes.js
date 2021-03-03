import express from 'express';
const router = express.Router();
import {
  authUser,
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
} from '../controllers/userController.js';

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById);
router.route('/profile/:id').put(updateUserById);
router.route('/auth').post(authUser);

// router.route('/profile').get();

export default router;
