import { createAction, props } from '@ngrx/store';
import { UserInterface } from 'src/app/types/user.interface';

export const signUp = createAction('[User] Sign Up');
export const signUpSuccess = createAction('[User] Sign Up Success', props<{user: UserInterface}>())
export const signUpFailure = createAction('[User] Sign Up Failure', props<{error: string}>())

export const signIn = createAction('[User] Sign In');
export const signInSuccess = createAction('[User] Sign In Success', props<{user: UserInterface}>())
export const signInFailure = createAction('[User] Sign In Failure', props<{error: string}>())

export const signOut = createAction('[User] Sign Out');