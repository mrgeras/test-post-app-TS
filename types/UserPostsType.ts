import { Post } from './PostType';

export type UserPostsType = {
  navigation: any; // Заменить
  onCreatePost: (post: Post) => void;
};
