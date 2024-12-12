import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "api";
import {
  CommentPostFields,
  DeletePostFields,
  EditPostFields,
  savePostFields,
  createPostFields,
} from "./types";

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

export const getUserPosts = createAsyncThunk("getUserPosts", async () => {
  const response = await axiosInstance.get("/api/posts/user-posts");
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

export const savePost = createAsyncThunk(
  "savePost",
  async (data: savePostFields) => {
    const response = await axiosInstance.post("/api/user/save", data);
    const resData = response.data;

    return resData;
  },
);

export const unSavePost = createAsyncThunk(
  "savePost",
  async (data: savePostFields) => {
    const response = await axiosInstance.post("/api/user/unsave", data);
    const resData = response.data;

    return resData;
  },
);

export const likePost = createAsyncThunk("likePost", async (postId: string) => {
  const response = await axiosInstance.put(`/api/posts/like-post`, { postId });
  const resData = response.data;

  return resData;
});

export const unLikePost = createAsyncThunk(
  "unLikePost",
  async (postId: string) => {
    const response = await axiosInstance.put(`/api/posts/unlike-post`, {
      postId,
    });
    const resData = response.data;

    return resData;
  },
);

export const commentPost = createAsyncThunk(
  "commentPost",
  async (date: CommentPostFields) => {
    const response = await axiosInstance.put(`/api/posts/comment-post`, date);
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
