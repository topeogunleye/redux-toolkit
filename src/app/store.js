import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import postsReducer from '../features/posts/postsSlice';
import commentsReducer from '../features/comments/commentsSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    counter: counterReducer,
  },
});
