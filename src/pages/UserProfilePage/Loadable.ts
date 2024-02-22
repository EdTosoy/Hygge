import { lazyLoad } from "utils";

export const UserProfilePage = lazyLoad(
  () => import("./index"),
  (module) => module.UserProfilePage,
);
