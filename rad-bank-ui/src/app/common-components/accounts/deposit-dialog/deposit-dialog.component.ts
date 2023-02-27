import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { isLoadingSelector, errorSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-deposit-dialog',
  templateUrl: './deposit-dialog.component.html',
  styleUrls: ['./deposit-dialog.component.scss'],
})
export class DepositDialogComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  amount = new FormControl(0, [Validators.required]);
  constructor(
    private _router: Router,
    private _auth: AuthService,
    private _store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
  }

  getErrorMessage(fc: FormControl) {
    return fc.hasError('required') ? 'You must enter a value' : '';
  }
}
