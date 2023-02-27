import { createAction, props } from '@ngrx/store';
import { AccountInterface } from '../types/account.interface';

export const getAccounts = createAction('[User] Get Accounts', props<{email: string}>());
export const getAccountsSuccess = createAction('User] Get Accounts Success', props<{accounts: AccountInterface[]}>())
export const getAccountsFailure = createAction('User] Get Accounts Failure', props<{error: string}>())

export const accountDeposit = createAction('[User] Account Deposit', props<{accountID: string, ammount: number, email: string}>());
export const accountDepositSuccess = createAction('User] Account Deposit Success', props<{accounts: AccountInterface[]}>())
export const accountDepositFailure = createAction('User] Account Deposit Failure', props<{error: string}>())

export const accountWithdraw = createAction('[User] Account Withdraw', props<{accountID: string, ammount: number, email: string}>())
export const accountWithdrawSuccess = createAction('User] Account Withdraw Success', props<{accounts: AccountInterface[]}>())
export const accountWithdrawFailure = createAction('User] Account Withdraw Failure', props<{error: string}>())

export const createAccount = createAction('[User] Create Account', props<{account: AccountInterface, email: string}>())
export const createAccountSuccess = createAction('User] Create Account Success', props<{accounts: AccountInterface[]}>())
export const createAccountFailure = createAction('User] Create Account Failure', props<{error: string}>())

export const deleteAccount = createAction('[User] Delete Account', props<{accountID: string, email: string}>())
export const deleteAccountSuccess = createAction('User] Delete Account Success', props<{accounts: AccountInterface[]}>())
export const deleteAccountFailure = createAction('User] Delete Account Failure', props<{error: string}>())