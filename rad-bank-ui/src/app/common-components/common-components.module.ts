import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeroComponent } from './hero/hero.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { MatTableModule } from '@angular/material/table';
import { WithdrawDialogComponent } from './accounts/withdraw-dialog/withdraw-dialog.component';
import { DepositDialogComponent } from './accounts/deposit-dialog/deposit-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    SignInFormComponent,
    SignUpFormComponent,
    AccountsListComponent,
    WithdrawDialogComponent,
    DepositDialogComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
  ],
  exports: [
    HeroComponent,
    HeaderComponent,
    SignInFormComponent,
    SignUpFormComponent,
    AccountsListComponent,
    WithdrawDialogComponent,
    DepositDialogComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class CommonComponentsModule {}
