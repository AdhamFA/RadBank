import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { accountsSelector } from 'src/app/store/selectors';
import { AccountInterface } from 'src/app/types/account.interface';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { CreateAccountDialogComponent } from '../create-account-dialog/create-account-dialog.component';
import { DepositDialogComponent } from '../deposit-dialog/deposit-dialog.component';
import { WithdrawDialogComponent } from '../withdraw-dialog/withdraw-dialog.component';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent {
  accounts$: Observable<AccountInterface[]>;
  displayedColumns: string[] = ['id', 'name', 'balance', 'actions'];

  constructor(public dialog: MatDialog, private _store: Store) {
    this.accounts$ = this._store.pipe(select(accountsSelector));
  }

  openDeleteDialog(account: AccountInterface) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: account,
    });
  }
  openWithdrawDialog(account: AccountInterface) {
    const dialogRef = this.dialog.open(WithdrawDialogComponent, {
      data: account,
    });
  }
  openDepositDialog(account: AccountInterface) {
    const dialogRef = this.dialog.open(DepositDialogComponent, {
      data: account,
    });
  }
  createAccountDialog() {
    const dialogRef = this.dialog.open(CreateAccountDialogComponent);
  }
}
