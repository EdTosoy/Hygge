import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { initialState } from "./slice";

const selectDomain = (state: RootState) => state.message || initialState;

export const selectAllMessages =
  createSelector([selectDomain], (message) => message.messages) || {};
