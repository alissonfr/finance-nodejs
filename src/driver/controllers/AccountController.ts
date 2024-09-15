import { Request, Response } from 'express';
import { GetAccount } from "../../application/usecases/account/GetAccount";
import { AccountDAODatabase } from "../../driven/database/AccountDAODatabase";
import { AccountResponse } from '../dto/response/AccountResponse';
import { GetAccountRequest } from '../dto/request/GetAccountRequest';

export class AccountController {

    async getAccount(req: Request, res: Response) {
        try {
            const accountDAO = new AccountDAODatabase();
            const getAccount = new GetAccount(accountDAO);
            const input: GetAccountRequest = {
                accountId: req.params.accountId
            };
            const account = await getAccount.execute(input);
            const output: AccountResponse = new AccountResponse(account.accountId, account.name, account.email)
            res.status(200).json(output);
        } catch (e: any) {
            res.status(422).json({
                message: e.message
            });
        }
    }

}