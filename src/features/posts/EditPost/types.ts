export type EditPostFormInput = {
  newContent: string;
  newTitle: string;
  newMediaUrl?: string;
  newCategory: string;
};

export interface EditPostProps {
  contentValue: string;
  postId: string;
  username: string;
  avatar: string;
  profileUserId: string;
  mediaUrl?: string;
  newCategory?: string;
}
