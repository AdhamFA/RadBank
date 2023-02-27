import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { signIn, signOut, signUp } from '../store/user.actions';
import { loggedInSelector } from '../store/selectors';
import { UserInterface } from '../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$: Observable<boolean>;
  constructor(private _store: Store) {
    this.isLoggedIn$ = this._store.pipe(select(loggedInSelector));
  }

  signOut() {
    this._store.dispatch(signOut());
  }

  signUp(newUser: UserInterface) {
    this._store.dispatch(signUp({ user: newUser }));
  }

  signIn(email: string) {
    this._store.dispatch(signIn({ email: email }));
  }
}
