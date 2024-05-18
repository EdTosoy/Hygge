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
