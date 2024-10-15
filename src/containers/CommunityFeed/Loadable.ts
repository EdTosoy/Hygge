import { lazyLoad } from "utils";
export const CommunityFeed = lazyLoad(
  () => import("./index"),
  (module) => module.CommunityFeed,
);
