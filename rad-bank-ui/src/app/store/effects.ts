import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, Observable, of } from 'rxjs';
import { UserInterface } from '../types/user.interface';
import * as UserActions from './actions/user.actions';

function getUser(): Observable<UserInterface> {
  const user: UserInterface = {
    email: '',
    firstName: '',
    lastName: '',
    accounts: [],
  };

  return of(user).pipe(delay(2000));
}

function signUp(newUser: UserInterface): Observable<UserInterface> {
    return of(newUser).pipe(delay(2000));
}

@Injectable()
export class UserEffects {
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.signUp),
      mergeMap(() => {
        return getUser().pipe(
          map((user) => UserActions.signUpSuccess({ user })),
          catchError((error) =>
            of(UserActions.signUpFailure({ error: error.message }))
          )
        );
      })
    )
  );

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.signIn),
      mergeMap(() => {
        return getUser().pipe(
          map((user) => UserActions.signInSuccess({ user })),
          catchError((error) =>
            of(UserActions.signInFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions) {}
}
