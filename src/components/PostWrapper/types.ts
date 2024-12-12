import { Post } from "src/features/posts/types";

export interface PostWrapperProps {
  post: Post;
  toggleShowOptions: () => void;
  handleEditPost: () => void;
  handleDeletePost: () => void;
  handleLikePost: (postId: string) => Promise<void>;
  handleSavePost: (postId: string) => Promise<void>;
  handleOnClickComment?: () => void;
  isModalView?: boolean;
}
export interface CommentInputField {
  comment: string;
}
