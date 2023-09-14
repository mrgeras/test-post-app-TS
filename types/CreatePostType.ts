import { Post } from './PostType';

export type CreatePostType = {
  onCreatePost: (post: Post) => void;
  onClose: () => void;
};
