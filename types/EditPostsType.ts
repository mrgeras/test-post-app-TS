import { Post } from './PostType';

export type EditPostsType = {
  post: Post;
  onClose: () => void;
  onUpdatePost: (post: Post) => void;
};
