import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { errorSelector, isLoadingSelector } from 'src/app/store/selectors';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  email = new FormControl('', [Validators.required, Validators.email]);
  lastName = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  constructor(
    private _router: Router,
    private _auth: AuthService,
    private _store: Store
  ) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector))
  }

  signUp() {
    let newUser: UserInterface = {
      email: this.email.value!,
      firstName: this.firstName.value!,
      lastName: this.lastName.value!,
    };

    this._auth.signUp(newUser);

    this._auth.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this._router.navigate(['']);
      }
    });
  }

  getErrorMessage(fc: FormControl) {
    if (fc.hasError('required')) {
      return 'You must enter a value';
    }

    return fc.hasError('email') ? 'Not a valid email' : '';
  }
}
