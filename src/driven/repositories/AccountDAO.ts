import { Account } from "../../domain/entities/Account";

export interface AccountDAO {
	getAccountByEmail (email: string): Promise<Account>;
	getAccountById (accountId: string): Promise<Account>;
	saveAccount (account: Account): Promise<void>;
}