import { Request, Response } from 'express';
import { AccountDAODatabase } from "../../driven/database/AccountDAODatabase";
import { Signup } from '../../application/usecases/auth/Signup';

export class AuthController {

    async signup(req: Request, res: Response) {
        try {
            const accountDAO = new AccountDAODatabase();
            const signup = new Signup(accountDAO);
            const output = await signup.execute(req.body);
            res.status(201).json(output);
        } catch (e: any) {
            res.status(422).json({
                message: e.message
            });
        }
    }
}