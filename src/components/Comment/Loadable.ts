import { lazyLoad } from "utils";

export const Comment = lazyLoad(
  () => import("./index"),
  (module) => module.Comment,
);
