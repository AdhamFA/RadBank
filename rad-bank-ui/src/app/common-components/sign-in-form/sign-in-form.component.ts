import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private _router: Router, private _auth: AuthService) {}

  signIn() {
    if (!this.email.hasError('required') && !this.email.hasError('email')) {
      this._auth.signIn(this.email.value!);
      this._router.navigate([''])
    }
  }

  getErrorMessage(fc: FormControl) {
    if (fc.hasError('required')) {
      return 'You must enter a value';
    }
    return fc.hasError('email') ? 'Not a valid email' : '';
  }
}
