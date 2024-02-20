import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AuthApiState, NewUser, User, UserBasicInfo } from "./types";
import { axiosInstance } from "api";

export const initialState: AuthApiState = {
  basicUserInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
  status: "idle",
  error: null,
};

export const signIn = createAsyncThunk("signin", async (data: User) => {
  const response = await axiosInstance.post("/api/user/login", data);
  const resData = response.data;

  localStorage.setItem("userInfo", JSON.stringify(resData));

  return resData;
});

export const signUp = createAsyncThunk("signup", async (data: NewUser) => {
  const response = await axiosInstance.post("/api/user/register", data);
  const resData = response.data;

  return resData;
});

export const lagout = createAsyncThunk("logout", async () => {
  const response = await axiosInstance.get("/api/user/logout");
  const resData = response.data;
  localStorage.removeItem("userInfo");

  return resData;
});

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
