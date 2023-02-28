import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { accountWithdraw } from 'src/app/store/account.actions';
import {
  isLoadingSelector,
  errorSelector,
  userSelector,
} from 'src/app/store/selectors';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  selector: 'app-withdraw-dialog',
  templateUrl: './withdraw-dialog.component.html',
  styleUrls: ['./withdraw-dialog.component.scss'],
})
export class WithdrawDialogComponent {
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

  withdraw() {
    if (this.amount.value) {
      this.user$.pipe(take(1)).subscribe((user) => {
        return this._store.dispatch(
          accountWithdraw({
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
