import express from 'express';
const router = express.Router();
import {
  createRoaster,
  getAllRoasters,
  getRoasterById,
} from '../controllers/roasterController.js';

router.route('/').get(getAllRoasters);
router.route('/new').post(createRoaster);
router.route('/:id').get(getRoasterById);

export default router;
