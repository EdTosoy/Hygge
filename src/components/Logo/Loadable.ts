import { lazyLoad } from "utils";

export const Logo = lazyLoad(
  () => import("./index"),
  (module) => module.Logo,
);
