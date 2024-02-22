import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "api";
import { DeletePostFields, EditPostFields, createPostFields } from "./types";

export const createPost = createAsyncThunk(
  "createPost",
  async (data: createPostFields) => {
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
export const updatePost = createAsyncThunk(
  "updatePost",
  async (data: EditPostFields) => {
    const response = await axiosInstance.put("/api/posts/update-post", data);
    const resData = response.data;

    return resData;
  },
);
export const deletePost = createAsyncThunk(
  "deletePost",
  async (data: DeletePostFields) => {
    const response = await axiosInstance.delete(
      `/api/posts/delete-post/${data.postId}`,
    );
    const resData = response.data;

    return resData;
  },
);
