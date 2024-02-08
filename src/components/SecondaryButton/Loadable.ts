import { lazyLoad } from "utils";

export const SecondaryButton = lazyLoad(
  () => import("./index"),
  (module) => module.SecondaryButton,
);
