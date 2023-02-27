import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { deleteAccount } from 'src/app/store/account.actions';
import { isLoadingSelector, errorSelector, userSelector } from 'src/app/store/selectors';
import { AccountInterface } from 'src/app/types/account.interface';
import { UserInterface } from 'src/app/types/user.interface';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.scss']
})
export class ConfirmDeleteDialogComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  user$: Observable<UserInterface>;

  constructor(
    private _store: Store,
    @Inject(MAT_DIALOG_DATA) public data: AccountInterface
  ) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.user$ = this._store.pipe(select(userSelector));
  }

  deleteAccount() {
    this.user$.subscribe(user => {
      this._store.dispatch(deleteAccount({accountID: this.data.id, email: user.email}))
    })
  }
}
