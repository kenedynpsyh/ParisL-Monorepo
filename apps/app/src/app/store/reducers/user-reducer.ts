import { createReducer, createSelector, on } from '@ngrx/store';
import { meAction$ } from '../actions/user-action';
import { AppState, UserInitialStateInterface } from '../types';

const initialState: UserInitialStateInterface = {
  user: {},
  userList: [],
};

export const userReducer = createReducer(
  initialState,
  on(meAction$, (state, action) => ({
    ...state,
    user: action.user || {},
  }))
);
export const userFeature = (state: AppState) => state.user;
export const userDetailSelector = createSelector(userFeature, (state) => state);
