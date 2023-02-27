import { Component } from '@angular/core';
import { AccountInterface } from 'src/app/types/account.interface';

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
}
