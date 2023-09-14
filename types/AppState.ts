import { Post } from './PostType';

export type AppState = {
  loggedIn: boolean;
  posts: Post[];
};
