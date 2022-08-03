import { MessageStateInterface } from './message-types';
import { UserStateInterface } from './user-types';

export interface UserInitialStateInterface {
  user: UserStateInterface;
  userList: UserStateInterface[];
}

export interface MessageInitialStateInterface {
  message: MessageStateInterface;
}

export interface AppState {
  user: UserInitialStateInterface;
  message: MessageStateInterface;
}
