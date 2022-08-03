type MessageType = 'success' | 'error' | 'info';
export interface MessageStateInterface {
  message: string;
  type: MessageType;
}
