import { createReducer, on } from '@ngrx/store';
import { UserStateInterface } from 'src/app/types/userState.interface';
import * as userActions from './user.actions';
import * as accountActions from './account.actions';

export const initialState: UserStateInterface = {
  isLoading: false,
  loggedIn: false,
  user: undefined,
  accounts: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(userActions.signIn, (state) => ({ ...state, isLoading: true })),
  on(userActions.signInSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    user: action.user,
    loggedIn: true,
  })),
  on(userActions.signInFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
    loggedIn: false,
  })),
  on(userActions.signUp, (state) => ({ ...state, isLoading: true })),
  on(userActions.signUpSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    user: action.user,
    loggedIn: true,
  })),
  on(userActions.signUpFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
    loggedIn: false,
  })),
  on(userActions.signOut, (state) => ({
    ...state,
    isLoading: false,
    user: undefined,
    loggedIn: false,
  })),
  on(accountActions.accountDeposit, (state) => ({ ...state, isLoading: true })),
  on(accountActions.accountDepositSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    accounts: action.accounts,
  })),
  on(accountActions.accountDepositFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(accountActions.accountWithdraw, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(accountActions.accountWithdrawSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    accounts: action.accounts,
  })),
  on(accountActions.accountWithdrawFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(accountActions.createAccount, (state) => ({ ...state, isLoading: true })),
  on(accountActions.createAccountSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    accounts: action.accounts,
  })),
  on(accountActions.createAccountFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(accountActions.deleteAccount, (state) => ({ ...state, isLoading: true })),
  on(accountActions.deleteAccountSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    accounts: action.accounts,
  })),
  on(accountActions.deleteAccountFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(accountActions.getAccounts, (state) => ({ ...state, isLoading: true })),
  on(accountActions.getAccountsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    accounts: action.accounts,
  })),
  on(accountActions.getAccountsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
