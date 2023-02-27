import { createAction, props } from '@ngrx/store';
import { UserInterface } from 'src/app/types/user.interface';
import { AccountInterface } from '../types/account.interface';

export const signUp = createAction('[User] Sign Up', props<{user: UserInterface}>());
export const signUpSuccess = createAction('[User] Sign Up Success', props<{user: UserInterface}>())
export const signUpFailure = createAction('[User] Sign Up Failure', props<{error: string}>())

export const signIn = createAction('[User] Sign In', props<{email: string}>());
export const signInSuccess = createAction('[User] Sign In Success', props<{user: UserInterface}>())
export const signInFailure = createAction('[User] Sign In Failure', props<{error: string}>())

export const signOut = createAction('[User] Sign Out');