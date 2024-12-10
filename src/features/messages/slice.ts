import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryApiState } from "./types";
import { createMessage, getAllMessages } from "./api";

export const initialState: CategoryApiState = {
  messages: [],
  status: "idle",
  error: null,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// get all messages
      .addCase(getAllMessages.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // need lagyan ng fields types
      .addCase(
        getAllMessages.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "idle";
          state.messages = action.payload;
        },
      )
      .addCase(getAllMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "All messages failed";
      })

      /// Create meesage
      .addCase(createMessage.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // need lagyan ng fields types
      .addCase(createMessage.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "idle";
        state.messages = action.payload;
      })
      .addCase(createMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Create message failed";
      });
  },
});

export default messagesSlice.reducer;
