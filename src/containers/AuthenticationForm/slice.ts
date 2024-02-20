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

export const login = createAsyncThunk("login", async (data: User) => {
  const response = await axiosInstance.post("/api/user/login", data);
  const resData = response.data;

  localStorage.setItem("userInfo", JSON.stringify(resData));

  return resData;
});

export const signUp = createAsyncThunk("register", async (data: NewUser) => {
  const response = await axiosInstance.post("/api/user/register", data);
  const resData = response.data;

  return resData;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<UserBasicInfo>) => {
          state.status = "idle";
          state.basicUserInfo = action.payload;
        },
      )
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Login failed";
      })

      /// Register

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
        state.error = action.error.message || "Registration failed";
      });
  },
});

export default authSlice.reducer;
