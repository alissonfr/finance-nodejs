import pgp from "pg-promise";
import { AccountDAO } from "../repositories/AccountDAO";
import { Account } from "../../domain/entities/Account";

const DB_URL = "postgres://postgres:admin@localhost:5432/app";

export class AccountDAODatabase implements AccountDAO {

	async getAccountByEmail (email: string): Promise<Account> {
		const connection = pgp()(DB_URL);
		const [acc] = await connection.query("select * from account where email = $1", [email]);
		await connection.$pool.end();
		return acc;
	}
	
	async getAccountById (accountId: string): Promise<Account> {
		const connection = pgp()(DB_URL);
		const [acc] = await connection.query("select * from account where account_id = $1", [accountId]);
		await connection.$pool.end();
		return acc;
	}
	
	async saveAccount (account: Account): Promise<void> {
		const connection = pgp()(DB_URL);
		await connection.query("insert into account (account_id, name, email, cpf) values ($1, $2, $3, $4)", 
			[account.accountId, account.name, account.email, account.cpf]);
		await connection.$pool.end();
	}
}