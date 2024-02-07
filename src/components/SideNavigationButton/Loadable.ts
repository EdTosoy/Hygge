import { lazyLoad } from "utils";

export const SideNavigationButton = lazyLoad(
  () => import("./index"),
  (module) => module.SideNavigationButton,
);
