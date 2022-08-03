import { createAction, props } from '@ngrx/store';
import {
  LoginStateInterface,
  RegisterStateInterface,
  ResetStateInterface,
  UserStateInterface,
} from '../types/user-types';

export const loginAction$ = createAction(
  '[Authenticate] Access login account$',
  props<{ body?: LoginStateInterface }>()
);

export const registerAction$ = createAction(
  '[Authenticate] Access register account$',
  props<{ body?: RegisterStateInterface }>()
);

export const resetAction$ = createAction(
  '[Authenticate] Access reset account$',
  props<{ body?: ResetStateInterface }>()
);

export const meAction$ = createAction(
  '[Authenticate] Access get me',
  props<{ user?: UserStateInterface }>()
);
