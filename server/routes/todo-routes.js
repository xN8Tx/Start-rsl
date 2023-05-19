import express from 'express';

import todoController from '../controller/todo-controller.js';
import { authenticateToken } from '../middleware/authorization.js';

const router = express.Router();

router.get('/:id', authenticateToken, todoController.get);
router.post('/', authenticateToken, todoController.post);
router.put('/:id', authenticateToken, todoController.put);
router.delete('/:id', authenticateToken, todoController.delete);

export default router;