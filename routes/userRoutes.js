import express from 'express';
const router = express.Router();
import { getAllUsers, getUserById } from '../controllers/userController.js';

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById);

// router.route('/login').post();

// router.route('/profile').get();

export default router;
