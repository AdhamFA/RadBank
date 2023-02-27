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
        mergeMap(async ({ user }) => AccountActions.getAccounts({ email: user.email }))
      )
  )

  signInSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.signInSuccess),
        mergeMap(async ({ user }) => AccountActions.getAccounts({ email: user.email }))
      )
  )

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

  constructor(
    private actions$: Actions,
    private _userService: MockAPIServiceService
  ) {}
}
