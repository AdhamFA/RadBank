import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
import { AccountInterface } from '../types/account.interface';
import { UserInterface } from '../types/user.interface';

interface Accounts {
  [key: string]: AccountInterface[];
}

@Injectable({
  providedIn: 'root',
})
export class MockAPIServiceService {
  users: UserInterface[] = [];
  accounts: Accounts = {};
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
    this.accounts[newUser.email] = [];
    return of(newUser).pipe(delay(2000));
  }

  getAccounts(email: string): Observable<AccountInterface[]> {
    return of(this.accounts[email]).pipe(delay(2000));
  }

  createAccount(newAccount: AccountInterface, email: string) {
    this.accounts[email].push(newAccount);

    return of(this.accounts[email]).pipe(delay(2000));
  }

  deleteAccount(accountId: string, email: string) {
    this.accounts[email] = this.accounts[email].filter(
      (account) => account.id !== accountId
    );

    return of(this.accounts[email]).pipe(delay(2000));
  }

  withdraw(accountId: string, email: string, amount: number) {
    let accountIndex = this.accounts[email].findIndex(
      (account) => account.id === accountId
    );
    let balance = this.accounts[email][accountIndex].balance;
    if (amount / balance > 0.9) {
      return throwError(() => {
        const error: any = new Error(
          `You cannot take out more than 90% of your balance at once, please divide your withdrawls into seperate transactions`
        );
        error.timestamp = Date.now();
        return error;
      });
    }
    let newBalance = this.accounts[email][accountIndex].balance - amount;
    if (newBalance < 100) {
      return throwError(() => {
        const error: any = new Error(`Your balance cannot be lower than $100`);
        error.timestamp = Date.now();
        return error;
      });
    } else {
      this.accounts[email][accountIndex].balance = newBalance;
      return of(this.accounts[email]).pipe(delay(2000));
    }
  }

  deposit(accountId: string, email: string, amount: number) {
    let accountIndex = this.accounts[email].findIndex(
      (account) => account.id === accountId
    );
    if (amount > 10000) {
      return throwError(() => {
        const error: any = new Error(
          `You cannot deposit more than $10,000 in a single transaction`
        );
        error.timestamp = Date.now();
        return error;
      });
    } else {
      let newBalance = this.accounts[email][accountIndex].balance - amount;
      this.accounts[email][accountIndex].balance = newBalance;
      return of(this.accounts[email]).pipe(delay(2000));
    }
  }
}
