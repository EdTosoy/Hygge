import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { initialState } from "./authSlice";

const selectDomain = (state: RootState) => state.auth || initialState;

export const selectBasicUserInfo =
  createSelector([selectDomain], (auth) => auth.basicUserInfo) || {};
