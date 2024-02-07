import { lazyLoad } from "utils";

export const Profile = lazyLoad(
  () => import("./index"),
  (module) => module.Profile,
);
