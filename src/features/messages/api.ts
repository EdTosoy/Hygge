import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "api";
import { createMessageFields } from "./types";

export const getAllMessages = createAsyncThunk("getAllCategories", async () => {
  const response = await axiosInstance.get("/api/categories/all-messages");
  const resData = response.data;

  return resData;
});

export const createMessage = createAsyncThunk(
  "createMessage",
  async (data: createMessageFields) => {
    const response = await axiosInstance.post(
      "/api/messages/create-message",
      data,
    );
    const resData = response.data;

    return resData;
  },
);
