import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "api";
import { NewUser, User, EditUser } from "./types";
import { USER_INFO } from "src/constants";

export const signIn = createAsyncThunk("signin", async (data: User) => {
  const response = await axiosInstance.post("/api/user/sign-in", data);
  const resData = response.data;

  localStorage.setItem(USER_INFO, JSON.stringify(resData));

  return resData;
});

export const signUp = createAsyncThunk("signup", async (data: NewUser) => {
  const response = await axiosInstance.post("/api/user/sign-up", data);
  const resData = response.data;

  return resData;
});

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data: EditUser) => {
    const response = await axiosInstance.put("/api/user/update-user", data);
    const resData = response.data;

    localStorage.removeItem(USER_INFO);
    localStorage.setItem(USER_INFO, JSON.stringify(resData));

    return resData;
  },
);

export const lagout = createAsyncThunk("logout", async () => {
  const response = await axiosInstance.get("/api/user/logout");
  const resData = response.data;
  localStorage.removeItem(USER_INFO);

  return resData;
});
