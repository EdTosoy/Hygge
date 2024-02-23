import { lazyLoad } from "utils";

export const EditUserProfile = lazyLoad(
  () => import("./index"),
  (module) => module.EditUserProfile,
);
