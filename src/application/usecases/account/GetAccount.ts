import { Account } from "../../../domain/entities/Account";
import { AccountDAO } from "../../../driven/repositories/AccountDAO";
import { GetAccountRequest } from "../../../driver/dto/request/GetAccountRequest";

export class GetAccount {

	constructor (readonly accountDAO: AccountDAO) {}

	async execute (input: GetAccountRequest): Promise<Account> {
		const account = await this.accountDAO.getAccountById(input.accountId);
		return account;
	}
}