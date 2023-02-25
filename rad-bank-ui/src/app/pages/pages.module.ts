import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { WithdrawPageComponent } from './withdraw-page/withdraw-page.component';
import { DepositPageComponent } from './deposit-page/deposit-page.component';
import { AccountsPageComponent } from './accounts-page/accounts-page.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    SignUpPageComponent,
    SignInPageComponent,
    WithdrawPageComponent,
    DepositPageComponent,
    AccountsPageComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
  ],
  exports: [
    LandingPageComponent,
    CommonComponentsModule
  ]
})
export class PagesModule { }
