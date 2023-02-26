import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { signIn } from 'src/app/store/actions/user.actions';
import { loggedInSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private _store: Store, private _router: Router) {}

  ngOnInit(): void {}

  signIn() {
    if (this.email.hasError('required') || this.email.hasError('email')) {
      return;
    }
    if (this.email.value) {
      this._store.dispatch(signIn({ email: this.email.value! }));
    }
  }

  getErrorMessage(fc: FormControl) {
    if (fc.hasError('required')) {
      return 'You must enter a value';
    }

    return fc.hasError('email') ? 'Not a valid email' : '';
  }
}
