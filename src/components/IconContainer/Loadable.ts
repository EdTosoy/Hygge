import { lazyLoad } from "utils";

export const IconContainer = lazyLoad(
  () => import("./index"),
  (module) => module.IconContainer,
);
