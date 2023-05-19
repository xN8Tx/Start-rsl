import express from 'express';

import coursesController from '../controller/courses-controller.js';
import { authenticateToken } from '../middleware/authorization.js';

const router = express.Router();

router.post('/', authenticateToken, coursesController.post);
router.get('/home/:count', coursesController.getByCount);
router.get('/', authenticateToken, coursesController.getAll);
router.get('/:id', authenticateToken, coursesController.getById);
router.put('/:id', authenticateToken, coursesController.put);
router.put('/rating/:id', authenticateToken, coursesController.putRating);
router.delete('/:id', authenticateToken, coursesController.delete);

export default router;
