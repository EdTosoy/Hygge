export type EditPostFormInput = {
  newContent: string;
  newTitle: string;
  newMediaUrl?: string;
};

export interface EditPostProps {
  contentValue: string;
  postId: string;
}
