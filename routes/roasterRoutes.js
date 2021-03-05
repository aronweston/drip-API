import express from 'express';
const router = express.Router();
import {
  createRoaster,
  getAllRoasters,
  getRoasterById,
  removeRoaster,
  updateRoaster,
} from '../controllers/roasterController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//PUBLIC
router.route('/').get(getAllRoasters);
router
  .route('/:id')
  .get(getRoasterById)
  .put(protect, admin, updateRoaster)
  .delete(protect, admin, removeRoaster);
//PRIVATE
router.route('/new').post(protect, admin, createRoaster);

export default router;
