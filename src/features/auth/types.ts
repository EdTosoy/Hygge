export type User = {
  email: string;
  password: string;
};

export type NewUser = User & {
  username?: string;
  confirmPassword?: string;
};

export type UserBasicInfo = {
  _id: string;
  username: string;
  email: string;
  token: string;
};

export type AuthApiState = {
  basicUserInfo?: UserBasicInfo | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
};
