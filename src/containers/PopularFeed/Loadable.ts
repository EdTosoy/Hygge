import { lazyLoad } from "utils";
export const PopularFeed = lazyLoad(
  () => import("./index"),
  (module) => module.PopularFeed,
);
