import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { createAccount } from 'src/app/store/account.actions';
import {
  isLoadingSelector,
  errorSelector,
  userSelector,
} from 'src/app/store/selectors';
import { AccountInterface } from 'src/app/types/account.interface';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  selector: 'app-create-account-dialog',
  templateUrl: './create-account-dialog.component.html',
  styleUrls: ['./create-account-dialog.component.scss'],
})
export class CreateAccountDialogComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  user$: Observable<UserInterface>;
  name = new FormControl('', [Validators.required]);
  constructor(
    private _store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.user$ = this._store.pipe(select(userSelector));
  }

  getErrorMessage(fc: FormControl) {
    return fc.hasError('required') ? 'You must enter a value' : '';
  }

  createAccount() {
    if (this.name.value) {
      let newAccount: AccountInterface = {
        id: 'NA',
        name: this.name.value,
        balance: 100,
      };
      this.user$.subscribe((user) => {
        this._store.dispatch(
          createAccount({ account: newAccount, email: user.email })
        );
      });
    }
  }
}
