import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { initialState } from "./slice";

const selectDomain = (state: RootState) => state.auth || initialState;

export const selectUserInfo =
  createSelector([selectDomain], (auth) => auth.userInfo) || {};

export const selectSingleUserInfo = createSelector(
  [selectDomain],
  (auth) => auth.singleUserInfo,
);
