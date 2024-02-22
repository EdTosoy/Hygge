import { lazyLoad } from "utils";

export const ProfileSummary = lazyLoad(
  () => import("./index"),
  (module) => module.ProfileSummary,
);
