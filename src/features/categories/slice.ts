import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryApiState } from "./types";
import { createCategory } from "./api";

export const initialState: CategoryApiState = {
  posts: [],
  userPosts: [],
  status: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// Create Post
      .addCase(createCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // need lagyan ng fields types
      .addCase(
        createCategory.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "idle";
          state.posts = action.payload;
        },
      )
      .addCase(createCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Create category failed";
      });
  },
});

export default categoriesSlice.reducer;
