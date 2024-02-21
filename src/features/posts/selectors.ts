import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { initialState } from "./slice";

const selectDomain = (state: RootState) => state.post || initialState;

export const selectAllPosts =
  createSelector([selectDomain], (auth) => auth.posts) || {};
