import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AccountInterface } from 'src/app/types/account.interface';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { CreateAccountDialogComponent } from '../create-account-dialog/create-account-dialog.component';
import { DepositDialogComponent } from '../deposit-dialog/deposit-dialog.component';
import { WithdrawDialogComponent } from '../withdraw-dialog/withdraw-dialog.component';

const ELEMENT_DATA: AccountInterface[] = [
  { id: '0000000000', name: 'default', balance: 12304.3 },
  { id: '0000000000', name: 'default', balance: 12304.3 },
  { id: '0000000000', name: 'default', balance: 12304.3 },
  { id: '0000000000', name: 'default', balance: 12304.3 },
  { id: '0000000000', name: 'default', balance: 12304.3 },
  { id: '0000000000', name: 'default', balance: 12304.3 },
  { id: '0000000000', name: 'default', balance: 12304.3 },
];

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent {
  displayedColumns: string[] = ['id', 'name', 'balance', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog, private _store: Store) {}

  openDeleteDialog(id: string) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);
  }
  openWithdrawDialog(id: string) {
    const dialogRef = this.dialog.open(WithdrawDialogComponent);
  }
  openDepositDialog(id: string) {
    const dialogRef = this.dialog.open(DepositDialogComponent);
  }
  createAccountDialog() {
    const dialogRef = this.dialog.open(CreateAccountDialogComponent);
  }
}
