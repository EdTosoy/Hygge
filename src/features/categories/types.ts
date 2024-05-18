export type createCategoryFields = {
  categoryName: string;
};

export type CategoryApiState = {
  posts?: Categories[] | [];
  userPosts?: Categories[] | [];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export interface Categories {}
