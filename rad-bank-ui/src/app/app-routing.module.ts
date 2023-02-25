import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountsPageComponent } from './pages/accounts-page/accounts-page.component';
import { DepositPageComponent } from './pages/deposit-page/deposit-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { WithdrawPageComponent } from './pages/withdraw-page/withdraw-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent
  },
  {
    path: 'sign-in',
    component: SignInPageComponent
  },
  {
    path: 'withdraw',
    component: WithdrawPageComponent
  },
  {
    path: 'deposit',
    component: DepositPageComponent
  },
  {
    path: 'accounts',
    component: AccountsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
