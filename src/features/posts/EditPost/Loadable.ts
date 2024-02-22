import { lazyLoad } from "utils";

export const EditPost = lazyLoad(
  () => import("./index"),
  (module) => module.EditPost,
);
