import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "api";
import { AddContactFields } from "./types";

export const getAllContacts = createAsyncThunk("getAllContacts", async () => {
  const response = await axiosInstance.get("/api/contacts/all-contacts");
  const resData = response.data;

  return resData;
});

export const addContact = createAsyncThunk(
  "addContact",
  async (data: AddContactFields) => {
    const response = await axiosInstance.post(
      "/api/contacts/add-contact",
      data,
    );
    const resData = response.data;

    return resData;
  },
);
