import { createReducer, on } from '@ngrx/store';
import { MessageStateInterface } from '../types/message-types';
import * as actions from '../actions/message-action';

const initialState: MessageStateInterface = {
  message: '',
  type: 'error',
};

export const messageReducer = createReducer(
  initialState,
  on(actions.createMessage, (state, action) => ({
    ...state,
    ...action.message,
  }))
);
