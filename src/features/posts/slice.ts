import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsApiState } from "./types";
import {
  createPost,
  deletePost,
  getPosts,
  getUserPosts,
  updatePost,
} from "./api";

export const initialState: PostsApiState = {
  posts: [],
  userPosts: [],
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// Create Post
      .addCase(createPost.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign In failed";
      })

      /// Get All Posts
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign Up failed";
      })

      /// Get User Posts
      .addCase(getUserPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getUserPosts.fulfilled,
        (state, action: PayloadAction<Post[]>) => {
          state.status = "idle";
          state.userPosts = action.payload;
        },
      )
      .addCase(getUserPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign Up failed";
      })

      /// Update Post
      .addCase(updatePost.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign In failed";
      })

      /// Delete Post
      .addCase(deletePost.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Lagout failed";
      });
  },
});

export default postsSlice.reducer;
