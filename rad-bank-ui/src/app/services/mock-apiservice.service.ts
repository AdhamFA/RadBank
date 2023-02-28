import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
import { AccountInterface } from '../types/account.interface';
import { UserInterface } from '../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class MockAPIServiceService {
  users: UserInterface[] = [];
  accounts = new Map<string, AccountInterface[] | undefined>();
  constructor() {}

  getUser(email: string): Observable<UserInterface> {
    let user = this.users.find((user) => user.email === email);
    if (user) {
      return of(user).pipe(delay(2000));
    } else {
      return throwError(() => {
        const error: any = new Error(`User does not exist!`);
        error.timestamp = Date.now();
        return error;
      });
    }
  }

  createUser(newUser: UserInterface): Observable<UserInterface> {
    this.users.push(newUser);
    this.accounts.set(newUser.email, []);
    return of(newUser).pipe(delay(2000));
  }

  getAccounts(email: string): Observable<AccountInterface[]> {
    if (this.accounts.has(email)) {
      let accounts = this.accounts.get(email);
      if (accounts) return of(accounts).pipe(delay(2000));

      return throwError(() => {
        const error: any = new Error(`Accounts don't exist`);
        error.timestamp = Date.now();
        return error;
      });
    } else {
      return throwError(() => {
        const error: any = new Error(`Accounts don't exist`);
        error.timestamp = Date.now();
        return error;
      });
    }
  }

  createAccount(newAccount: AccountInterface, email: string) {
    if (this.accounts.has(email)) {
      let accounts = this.accounts.get(email);
      let acc: AccountInterface = {
        id: '00000' + (accounts!.length + 1),
        name: newAccount.name,
        balance: newAccount.balance,
      };
      accounts = [...accounts!, acc];
      this.accounts.set(email, accounts);

      if (accounts) return of(accounts).pipe(delay(2000));

      return throwError(() => {
        const error: any = new Error(`Account does not exist`);
        error.timestamp = Date.now();
        return error;
      });
    } else {
      return throwError(() => {
        const error: any = new Error(`Account does not exist`);
        error.timestamp = Date.now();
        return error;
      });
    }
  }

  deleteAccount(accountId: string, email: string) {
    this.accounts.set(
      email,
      this.accounts.get(email)!.filter((account) => account.id !== accountId)
    );

    let accounts = this.accounts.get(email);

    if (accounts) return of(accounts).pipe(delay(2000));

    return throwError(() => {
      const error: any = new Error(`Accounts do not exist!`);
      error.timestamp = Date.now();
      return error;
    });
  }

  withdraw(accountId: string, email: string, amount: number) {
    if (this.accounts.has(email)) {
      let accounts = this.accounts.get(email);
      let account = accounts!.find((account) => account.id === accountId);
      let balance = account!.balance;
      if (amount / balance! > 0.9) {
        return throwError(() => {
          const error: any = new Error(
            `You cannot take out more than 90% of your balance at once, please divide your withdrawls into seperate transactions`
          );
          error.timestamp = Date.now();
          return error;
        });
      }
      let newBalance = +balance! - +amount;
      if (newBalance < 100) {
        return throwError(() => {
          const error: any = new Error(
            `Your balance cannot be lower than $100`
          );
          error.timestamp = Date.now();
          return error;
        });
      } else {
        let updatedAccount: AccountInterface = {
          id: account!.id,
          name: account!.name,
          balance: newBalance,
        };
        accounts = [
          ...accounts!.filter((account) => account.id !== accountId),
          updatedAccount,
        ];

        this.accounts.set(email, accounts);

        if (accounts) return of(accounts).pipe(delay(2000));

        return throwError(() => {
          const error: any = new Error(`Accounts do not exist!`);
          error.timestamp = Date.now();
          return error;
        });
      }
    } else {
      return throwError(() => {
        const error: any = new Error(`Accounts do not exist!`);
        error.timestamp = Date.now();
        return error;
      });
    }
  }

  deposit(accountId: string, email: string, amount: number) {
    if (this.accounts.has(email)) {
      let accounts = this.accounts.get(email);
      let account = accounts!.find((acc) => acc.id === accountId);
      if (account) {
        if (amount > 10000) {
          return throwError(() => {
            const error: any = new Error(
              `You cannot deposit more than $10,000 in a single transaction`
            );
            error.timestamp = Date.now();
            return error;
          });
        } else {
          let newBalance = +account.balance + +amount;
          let updatedAccount: AccountInterface = {
            id: account.id,
            name: account.name,
            balance: newBalance,
          };
          accounts = [
            ...accounts!.filter((account) => account.id !== accountId),
            updatedAccount,
          ];

          this.accounts.set(email, accounts);
          if (accounts) return of(accounts).pipe(delay(2000));

          return throwError(() => {
            const error: any = new Error(`Account does not exist`);
            error.timestamp = Date.now();
            return error;
          });
        }
      } else {
        return throwError(() => {
          const error: any = new Error(`Account does not exist!`);
          error.timestamp = Date.now();
          return error;
        });
      }
    } else {
      return throwError(() => {
        const error: any = new Error(`Accounts do not exist!`);
        error.timestamp = Date.now();
        return error;
      });
    }
  }
}
