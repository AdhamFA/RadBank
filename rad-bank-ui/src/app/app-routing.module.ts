import { inject, NgModule, Type } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountsPageComponent } from './pages/accounts-page/accounts-page.component';
import { DepositPageComponent } from './pages/deposit-page/deposit-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { WithdrawPageComponent } from './pages/withdraw-page/withdraw-page.component';
import { AuthGuard } from './services/auth.guard';

function mapToCanActivate(providers: Array<Type<{canActivate: CanActivateFn}>>): CanActivateFn[] {
  return providers.map(provider => (...params) => inject(provider).canActivate(...params));
}

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
    
  },
  {
    path: 'sign-in',
    component: SignInPageComponent
  },
  {
    path: 'withdraw',
    component: WithdrawPageComponent,
    canActivate: mapToCanActivate([AuthGuard])
  },
  {
    path: 'deposit',
    component: DepositPageComponent,
    canActivate: mapToCanActivate([AuthGuard])
  },
  {
    path: 'accounts',
    component: AccountsPageComponent,
    canActivate: mapToCanActivate([AuthGuard])
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
