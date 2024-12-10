export type createMessageInput = {
  message: string;
};

export interface IMessage {
  messageFrom: {
    userId: string;
    username: string;
    avatar: string;
  };
  messageTo: {
    userId: string;
    username: string;
    avatar: string;
  };
  message: string;
}
