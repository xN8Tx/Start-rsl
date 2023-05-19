import express from 'express';

import commentsController from '../controller/comments-controller.js';
import { authenticateToken } from '../middleware/authorization.js';

const router = express.Router();

router.get('/', authenticateToken, commentsController.getAll);
router.get('/:id', authenticateToken, commentsController.getById);
router.post('/', authenticateToken, commentsController.post);
router.delete('/:id', authenticateToken, commentsController.delete);
router.put('/likes/:id', authenticateToken, commentsController.putLikes);
router.put('/dislikes/:id', authenticateToken, commentsController.putDislikes);

export default router;