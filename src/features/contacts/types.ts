export type AddContactFields = {
  contactUserId: string;
  contactUsername: string;
  contactAvatar: string;
};

export type ContactApiState = {
  contacts?: Contacts[] | [];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export interface Contacts {
  contactInfo: {
    userId: string;
    username: string;
    avatar: string;
  };
  contactOf: {
    username: string;
    avatar: string;
    id: string;
  };
}
