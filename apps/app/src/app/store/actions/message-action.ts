import { createAction, props } from '@ngrx/store';
import { MessageStateInterface } from '../types/message-types';

export const messageAction$ = createAction(
  '[Notification] Create new message',
  props<{ message: MessageStateInterface }>()
);
