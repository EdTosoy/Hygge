import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthApiState, UserInfo } from "./types";
import { USER_INFO } from "src/constants";
import { signIn, signUp, lagout, updateUser, getSingleUser } from "./api";

export const initialState: AuthApiState = {
  userInfo: localStorage.getItem(USER_INFO)
    ? JSON.parse(localStorage.getItem(USER_INFO) as string)
    : null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      /// Sign In
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<UserInfo>) => {
        state.status = "idle";
        state.userInfo = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign In failed";
      })

      /// Sign Up
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<UserInfo>) => {
        state.status = "idle";
        state.userInfo = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign Up failed";
      })

      // Update User
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        updateUser.fulfilled,
        (state, action: PayloadAction<UserInfo>) => {
          state.status = "idle";
          state.userInfo = action.payload;
        },
      )
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign In failed";
      })

      /// Lagout
      .addCase(lagout.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(lagout.fulfilled, (state) => {
        state.status = "idle";
        state.userInfo = null;
      })
      .addCase(lagout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Lagout failed";
      })

      /// get user info
      .addCase(getSingleUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getSingleUser.fulfilled,
        (state, action: PayloadAction<UserInfo>) => {
          state.status = "idle";
          state.singleUserInfo = action.payload;
        },
      )
      .addCase(getSingleUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Get User Info failed";
      });
  },
});

export default authSlice.reducer;
