import crypto from "crypto";
import { validate } from "../../validators/validateCpf";
import { AccountDAO } from "../../../driven/repositories/AccountDAO";
import { Account } from "../../../domain/entities/Account";
import { SignupRequest } from "../../../driver/dto/request/SignupRequest";

export class Signup {
	
	constructor (readonly accountDAO: AccountDAO) {}

	async execute (input: SignupRequest): Promise<Account> {
		const account: Account = {
			accountId: input.accountId,
			name: input.name,
			email: input.email,
			cpf: input.cpf
		};
		account.accountId = crypto.randomUUID();
		const existingAccount = await this.accountDAO.getAccountByEmail(input.email);
		if (existingAccount) throw new Error("Account already exists");
		if (!account.name.match(/[a-zA-Z] [a-zA-Z]+/)) throw new Error("Invalid name");
		if (!account.email.match(/^(.+)@(.+)$/)) throw new Error("Invalid email");
		if (!validate(account.cpf)) throw new Error("Invalid cpf");
		await this.accountDAO.saveAccount(account);
		return this.accountDAO.getAccountById(account.accountId);
	}
}