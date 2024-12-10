import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { initialState } from "./slice";

const selectDomain = (state: RootState) => state.contact || initialState;

export const selectAllContacts =
  createSelector([selectDomain], (contact) => contact.contacts) || {};
