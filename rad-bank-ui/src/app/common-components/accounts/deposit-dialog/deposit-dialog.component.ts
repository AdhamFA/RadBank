import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { accountDeposit } from 'src/app/store/account.actions';
import {
  isLoadingSelector,
  errorSelector,
  userSelector,
} from 'src/app/store/selectors';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  selector: 'app-deposit-dialog',
  templateUrl: './deposit-dialog.component.html',
  styleUrls: ['./deposit-dialog.component.scss'],
})
export class DepositDialogComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  user$: Observable<UserInterface>;
  amount = new FormControl(0, [Validators.required]);
  constructor(
    private _router: Router,
    private _auth: AuthService,
    private _store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.user$ = this._store.pipe(select(userSelector));
  }

  deposit() {
    if (this.amount.value) {
      this.user$.subscribe((user) => {
        this._store.dispatch(
          accountDeposit({
            accountID: this.data.id,
            ammount: this.amount.value!,
            email: user.email,
          })
        );
      });
    }
  }

  getErrorMessage(fc: FormControl) {
    return fc.hasError('required') ? 'You must enter a value' : '';
  }
}
