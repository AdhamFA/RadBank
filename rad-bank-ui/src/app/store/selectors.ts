import { createSelector } from '@ngrx/store';

export const selectFeature = (state: any) => state.user;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const userSelector = createSelector(
  selectFeature,
  (state) => state.user
);

export const accountsSelector = createSelector(
  selectFeature,
  (state) => state.accounts
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);

export const loggedInSelector = createSelector(
    selectFeature,
    (state) => state.loggedIn
  );