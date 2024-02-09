import { lazyLoad } from "utils";

export const PageNotFound = lazyLoad(
  () => import("./index"),
  (module) => module.PageNotFound,
);
