import { createAction, props } from '@ngrx/store';
import {
  UserLoginStateInterface,
  UserRegisterStateInterface,
  UserResetStateInterface,
  UserStateInterface,
} from '../types/user-types';

export const loginAction$ = createAction(
  '[Authenticate] Access login accounts',
  props<{ body?: UserLoginStateInterface }>()
);

export const registerAction$ = createAction(
  '[Authenticate] Access created accounts',
  props<{ body?: UserRegisterStateInterface }>()
);

export const resetAction$ = createAction(
  '[Authenticate] Access reset accounts',
  props<{ body?: UserResetStateInterface }>()
);

export const meAction$ = createAction(
  '[Authenticate] Access get me',
  props<{ data?: UserStateInterface }>()
);
