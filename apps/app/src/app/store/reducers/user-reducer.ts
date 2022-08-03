import { createReducer, on } from '@ngrx/store';
import { UserStateInterface } from '../types/user-types';
import * as actions from '../actions/user-action';

const initialState: UserStateInterface = {
  user: [],
  data: {},
};

export const userReducer = createReducer(
  initialState,
  on(actions.loginAction$, (state, action) => ({
    ...state,
  })),
  on(actions.meAction$, (state, action) => ({
    ...state,
    data: action.data || {},
  }))
);
