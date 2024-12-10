import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactApiState } from "./types";
import { addContact, getAllContacts } from "./api";

export const initialState: ContactApiState = {
  contacts: [],
  status: "idle",
  error: null,
};

const ContactsSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// get all Contacts
      .addCase(getAllContacts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // need lagyan ng fields types
      .addCase(
        getAllContacts.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "idle";
          state.contacts = action.payload;
        },
      )
      .addCase(getAllContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "All Contacts failed";
      })

      /// Create meesage
      .addCase(addContact.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // need lagyan ng fields types
      .addCase(addContact.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "idle";
        state.contacts = action.payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Create contact failed";
      });
  },
});

export default ContactsSlice.reducer;
