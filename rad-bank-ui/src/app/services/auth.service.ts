import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { signIn, signOut } from '../store/user.actions';
import { loggedInSelector } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$: Observable<boolean>;
  constructor(private _store: Store) {
    this.isLoggedIn$ = this._store.pipe(select(loggedInSelector))
   }

   signOut() {
    this._store.dispatch(signOut());
   }

   signIn(email: string) {
    this._store.dispatch(signIn({ email: email}));
   }
}
