import express from 'express';
const router = express.Router();
import {
  getAllRoasters,
  getRoasterById,
} from '../controllers/roasterController.js';

router.route('/').get(getAllRoasters);
router.route('/:id').get(getRoasterById);

export default router;
