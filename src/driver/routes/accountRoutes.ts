import { Router } from 'express';
import { AccountController } from '../controllers/AccountController';

const router = Router();
const accountController = new AccountController()

router.get('/:accountId', accountController.getAccount);

export default router;