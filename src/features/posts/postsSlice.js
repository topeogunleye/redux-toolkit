import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  useFetch from './postsAPI';

const initialState = {
  posts: [],
  status: 'idle',
};

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await useFetch();
    return response;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    }
  },
  extraReducers: {
    [fetchPostsAsync.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPostsAsync.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    [fetchPostsAsync.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { setPosts, deletePost } = postsSlice.actions;

export const selectPosts = state => state.posts.posts;

export default postsSlice.reducer;

