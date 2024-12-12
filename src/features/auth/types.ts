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
  avatar?: string;
  wallpaper?: string;
};

export type UserInfo = {
  _id: string;
  username: string;
  email: string;
  token: string;
  profileId: string;
  bio: string;
  avatar: string;
  wallpaper: string;
  savedPosts: string[];
};

export type AuthApiState = {
  userInfo?: UserInfo | null;
  singleUserInfo?: UserInfo | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export interface fileUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  original_filename: string;
}
