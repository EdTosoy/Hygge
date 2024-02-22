import { lazyLoad } from "utils";
export const HomeFeed = lazyLoad(
  () => import("./index"),
  (module) => module.HomeFeed,
);
