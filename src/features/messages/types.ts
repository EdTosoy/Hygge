export type createMessageFields = {
  message: string;
  messageTo: {
    userId: string;
    username: string;
    avatar: string;
  };
};

export type CategoryApiState = {
  messages?: Messages[] | [];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export interface Messages {
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
