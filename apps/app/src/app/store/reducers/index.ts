import { MessageStateInterface } from '../types/message-types';
import { UserStateInterface } from '../types/user-types';

export interface ApplicationState {
  user: UserStateInterface;
  message: MessageStateInterface;
}
