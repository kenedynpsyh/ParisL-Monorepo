import { createReducer, createSelector, on } from '@ngrx/store';
import { messageAction$ } from '../actions/message-action';
import { AppState } from '../types';
import { MessageStateInterface } from '../types/message-types';

const initialState: MessageStateInterface = {
  message: '',
  type: 'error',
};

export const messageReducer = createReducer(
  initialState,
  on(messageAction$, (state, action) => ({
    ...state,
    ...action.message,
  }))
);
export const messageFeature = (state: AppState) => state.message;
export const messageSelector = createSelector(messageFeature, (state) => state);
