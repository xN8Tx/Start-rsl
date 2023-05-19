import express from 'express';

import { authenticateToken } from '../middleware/authorization.js';
import { fileChecker } from '../middleware/file-checker.js';

import fileController from '../controller/files-controller.js';

const router = express.Router();

router.post('/avatar/:id', authenticateToken, fileChecker.single('avatar'), fileController.avatar);
router.post('/cover/:id',  authenticateToken, fileChecker.single('cover'),  fileController.cover);
router.post('/course', authenticateToken, fileChecker.single('course'), fileController.course);

export default router;