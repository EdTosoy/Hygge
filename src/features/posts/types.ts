export type createPostFields = {
  title: string;
  content: string;
  userId: string;
  username: string;
  mediaUrl?: string;
};

export type EditPostFields = {
  newTitle: string;
  newContent: string;
  newMediaUrl?: string;
  postId: string;
};
export type DeletePostFields = {
  postId: string;
};

export type PostsApiState = {
  posts?: Post[] | [];
  userPosts?: Post[] | [];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export interface Post {
  _id: string;

  content: string;
  createdAt: string;
  mediaUrl?: string;
  title: string;
  updatedAt: string;
  userAvatar: string;
  userId: string;
  username: string;
  likes: string[];
  comments: string[];
  shares: string[];
  showOptions: boolean;
}
