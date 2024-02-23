export type User = {
  email?: string;
  password?: string;
};

export type NewUser = User & {
  username?: string;
  confirmPassword?: string;
};

export type EditUser = NewUser & {
  bio?: string;
  profileId?: string;
};

export type UserInfo = {
  _id: string;
  username: string;
  email: string;
  token: string;
  profileId: string;
  bio: string;
};

export type AuthApiState = {
  userInfo?: UserInfo | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
};
