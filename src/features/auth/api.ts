import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "api";
import { NewUser, User, EditUser, fileUploadResponse } from "./types";
import { USER_INFO } from "src/constants";
import axios from "axios";
import cookie from "js-cookie";

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
  cookie.remove("refreshToken");
  window.location.reload();

  return resData;
});

export const fileUpload = async (acceptedFiles: File[]) => {
  const formData = new FormData();

  formData.append("file", acceptedFiles[0]);
  formData.append("upload_preset", "test-react-uploads-unsigned");
  formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/dxsc1spde/image/upload",
    formData,
  );
  return response.data as fileUploadResponse;
};

export const getSingleUser = createAsyncThunk(
  "getSingleUser",
  async (id: string) => {
    const response = await axiosInstance.get(`/api/user/${id}`);
    const resData = response.data;

    return resData;
  },
);
