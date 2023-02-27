import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { errorSelector, isLoadingSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private _router: Router, private _auth: AuthService, private _store: Store) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector))
    this.error$ = this._store.pipe(select(errorSelector))
  }

  signIn() {
    if (!this.email.hasError('required') && !this.email.hasError('email')) {
      this._auth.signIn(this.email.value!);
      this._auth.isLoggedIn$.subscribe(isLoggedIn => {
        if (isLoggedIn) {
          this._router.navigate([''])
        }
      })
    }
  }

  getErrorMessage(fc: FormControl) {
    if (fc.hasError('required')) {
      return 'You must enter a value';
    }
    return fc.hasError('email') ? 'Not a valid email' : '';
  }
}
