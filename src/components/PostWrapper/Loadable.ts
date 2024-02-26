import { lazyLoad } from "utils";

export const PostWrapper = lazyLoad(
  () => import("./index"),
  (module) => module.PostWrapper,
);
