import { createAction, props } from '@ngrx/store';
import { MessageStateInterface } from '../types/message-types';

export const createMessage = createAction(
  '[Message] create new notifications',
  props<{ message: MessageStateInterface }>()
);
