import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { MockAPIServiceService } from '../services/mock-apiservice.service';
import * as UserActions from './user.actions';
import * as AccountActions from './account.actions';

@Injectable()
export class UserEffects {
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.signUp),
      mergeMap(({ user }) => {
        return this._userService.createUser(user).pipe(
          map((user) => UserActions.signUpSuccess({ user })),
          catchError((error) =>
            of(UserActions.signUpFailure({ error: error.message }))
          )
        );
      })
    )
  );

  signUpSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.signUpSuccess),
      mergeMap(async ({ user }) =>
        AccountActions.getAccounts({ email: user.email })
      )
    )
  );

  signInSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.signInSuccess),
      mergeMap(async ({ user }) =>
        AccountActions.getAccounts({ email: user.email })
      )
    )
  );

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.signIn),
      mergeMap(({ email }) => {
        return this._userService.getUser(email).pipe(
          map((user) => UserActions.signInSuccess({ user })),
          catchError((error) =>
            of(UserActions.signInFailure({ error: error.message }))
          )
        );
      })
    )
  );

  getAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.getAccounts),
      mergeMap(({ email }) => {
        return this._userService.getAccounts(email).pipe(
          map((accounts) => AccountActions.getAccountsSuccess({ accounts })),
          catchError((error) =>
            of(AccountActions.getAccountsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  createAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.createAccount),
      mergeMap(({ account, email }) => {
        return this._userService.createAccount(account, email).pipe(
          map((accounts) => AccountActions.createAccountSuccess({ accounts })),
          catchError((error) =>
            of(AccountActions.createAccountFailure({ error: error.message }))
          )
        );
      })
    )
  );

  deleteAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.deleteAccount),
      mergeMap(({ accountID, email }) => {
        return this._userService.deleteAccount(accountID, email).pipe(
          map((accounts) => AccountActions.deleteAccountSuccess({ accounts })),
          catchError((error) =>
            of(AccountActions.deleteAccountFailure({ error: error.message }))
          )
        );
      })
    )
  );

  accountWithdraw$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.accountWithdraw),
      mergeMap(({ accountID, ammount, email }) => {
        return this._userService.withdraw(accountID, email, ammount).pipe(
          map((accounts) =>
            AccountActions.accountWithdrawSuccess({ accounts })
          ),
          catchError((error) =>
            of(AccountActions.accountWithdrawFailure({ error: error.message }))
          )
        );
      })
    )
  );

  accountDeposit$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AccountActions.accountDeposit),
    mergeMap(({ accountID, ammount, email }) => {
      return this._userService.deposit(accountID, email, ammount).pipe(
        map((accounts) =>
          AccountActions.accountDepositSuccess({ accounts })
        ),
        catchError((error) =>
          of(AccountActions.accountDepositFailure({ error: error.message }))
        )
      );
    })
  )
);

  constructor(
    private actions$: Actions,
    private _userService: MockAPIServiceService
  ) {}
}
