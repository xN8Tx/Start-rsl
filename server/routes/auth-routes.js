import express from 'express';

import authController from '../controller/auth-controller.js';

const router = express.Router();

router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.get('/refresh', authController.refresh);
router.delete('/logout', authController.logout);

export default router;