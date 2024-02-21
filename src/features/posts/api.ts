import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "api";
import { Posts } from "./types";

export const createPost = createAsyncThunk(
  "createPost",
  async (data: Posts) => {
    const response = await axiosInstance.post("/api/posts/create-post", data);
    const resData = response.data;

    return resData;
  },
);
export const getPosts = createAsyncThunk("getPosts", async () => {
  const response = await axiosInstance.get("/api/posts/all-posts");
  const resData = response.data;

  return resData;
});
export const updatePost = createAsyncThunk("updatePost", async () => {
  const response = await axiosInstance.put("/api/posts/update-post");
  const resData = response.data;

  return resData;
});
export const deletePost = createAsyncThunk("deletePost", async () => {
  const response = await axiosInstance.delete("/api/posts/delete-post");
  const resData = response.data;

  return resData;
});
