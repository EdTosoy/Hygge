export type AddContactFields = {
  contactInfo: {
    userId: string;
    username: string;
    avatar: string;
  };
  contactFrom: {
    userId: string;
    username: string;
    avatar: string;
  };
};

export type ContactApiState = {
  contacts?: Contacts[] | [];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export interface Contacts {
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
