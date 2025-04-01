import express from 'express';
import {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';
import { authenticate, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getJobs);
router.get('/:id', getJob);

router.post('/', authenticate, requireRole('employer'), createJob);
router.put('/:id', authenticate, requireRole('employer'), updateJob);
router.delete('/:id', authenticate, requireRole('employer'), deleteJob);

export default router;