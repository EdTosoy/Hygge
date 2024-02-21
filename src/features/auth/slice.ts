import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthApiState, UserBasicInfo } from "./types";
import { USER_INFO } from "src/constants";
import { signIn, signUp, lagout } from "./api";

export const initialState: AuthApiState = {
  basicUserInfo: localStorage.getItem(USER_INFO)
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
      .addCase(
        signIn.fulfilled,
        (state, action: PayloadAction<UserBasicInfo>) => {
          state.status = "idle";
          state.basicUserInfo = action.payload;
        },
      )
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign In failed";
      })

      /// Sign Up
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        signUp.fulfilled,
        (state, action: PayloadAction<UserBasicInfo>) => {
          state.status = "idle";
          state.basicUserInfo = action.payload;
        },
      )
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Sign Up failed";
      })

      /// Lagout
      .addCase(lagout.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(lagout.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(lagout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Lagout failed";
      });
  },
});

export default authSlice.reducer;
