import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "api";
import { createMessageFields } from "./types";

export const getAllMessages = createAsyncThunk("getAllMessages", async () => {
  const response = await axiosInstance.get("/api/messages/all-messages");
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
