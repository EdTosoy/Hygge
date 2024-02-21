export type Posts = {
  title: string;
  content: string;
  userId: string;
  username: string;
  mediaUrl?: string;
};

export type PostsApiState = {
  posts?: [Posts] | [];
  status: "idle" | "loading" | "failed";
  error: string | null;
};
