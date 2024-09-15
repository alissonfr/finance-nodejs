import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';

const router = Router();
const authController = new AuthController()

router.get('/signup', authController.signup);

export default router;