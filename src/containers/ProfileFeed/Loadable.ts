import { lazyLoad } from "utils";
export const ProfileFeed = lazyLoad(
  () => import("./index"),
  (module) => module.ProfileFeed,
);
