import express from 'express';

import { authenticateToken } from '../middleware/authorization.js';
import { videoChecker } from '../middleware/video-checker.js';

import videoController from '../controller/video-controller.js';

const router = express.Router();

router.post('/course', authenticateToken, videoChecker.single('course'), videoController.course);

export default router;