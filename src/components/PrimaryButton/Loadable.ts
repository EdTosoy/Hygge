import { lazyLoad } from "utils";

export const PrimaryButton = lazyLoad(
  () => import("./index"),
  (module) => module.PrimaryButton,
);
