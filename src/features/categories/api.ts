import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "api";
import { createCategoryFields } from "./types";

export const createCategory = createAsyncThunk(
  "createPost",
  async (data: createCategoryFields) => {
    const response = await axiosInstance.post(
      "/api/categories/create-category",
      data,
    );
    const resData = response.data;

    return resData;
  },
);

export const getAllCategories = createAsyncThunk(
  "getAllCategories",
  async () => {
    const response = await axiosInstance.get("/api/categories/all-categories");
    const resData = response.data;

    return resData;
  },
);
