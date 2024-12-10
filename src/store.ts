import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/slice";
import postReducer from "./features/posts/slice";
import categoryReducer from "./features/categories/slice";
import messageReducer from "./features/messages/slice";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    category: categoryReducer,
    message: messageReducer,
  },
});
