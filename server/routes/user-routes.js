import express from 'express';

import userController from '../controller/user-controller.js';
import { authenticateToken } from '../middleware/authorization.js';

const router = express.Router();

router.get('/', authenticateToken, userController.getAll);
router.get('/:id', userController.getById);
router.delete('/:id', authenticateToken, userController.delete);
router.put('/:id', authenticateToken, userController.put);
router.put('/course/:id', authenticateToken, userController.putCourse);
router.put('/experience/:id', authenticateToken, userController.putExperience);
router.put('/crm/:id', authenticateToken, userController.putCRM);

export default router;