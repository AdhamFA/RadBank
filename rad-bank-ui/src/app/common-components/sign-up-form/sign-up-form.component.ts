import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  lastName = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  constructor(private _router: Router, private _auth: AuthService) {

  }


  signUp() {
    let newUser: UserInterface = {
      email: this.email.value!,
      firstName: this.firstName.value!,
      lastName: this.lastName.value!
    }

    this._auth.signUp(newUser)
  }

  getErrorMessage(fc: FormControl) {
    if (fc.hasError('required')) {
      return 'You must enter a value';
    }

    return fc.hasError('email') ? 'Not a valid email' : '';
  }
}
