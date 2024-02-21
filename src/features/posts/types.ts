export type createPostFields = {
  title: string;
  content: string;
  userId: string;
  username: string;
  mediaUrl?: string;
};

export type PostsApiState = {
  posts?: Post[] | [];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export interface Post {
  _id: string;
  commentsCount: number;
  content: string;
  createdAt: string;
  likesCount: number;
  mediaUrl?: string;
  sharesCount: number;
  title: string;
  updatedAt: string;
  userId: string;
  username: string;
}
