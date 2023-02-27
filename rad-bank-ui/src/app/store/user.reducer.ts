import { createReducer, on } from '@ngrx/store';
import { UserStateInterface } from 'src/app/types/userState.interface';
import * as userActions from './user.actions';

export const initialState: UserStateInterface = {
  isLoading: false,
  loggedIn: false,
  user: undefined,
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
  on(userActions.signOut, (state) => ({ ...state, isLoading: false, user: undefined, loggedIn: false }))
);
