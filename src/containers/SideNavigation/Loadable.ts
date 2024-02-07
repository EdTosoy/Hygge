import { lazyLoad } from "utils";
export const SideNavigation = lazyLoad(
  () => import("./index"),
  (module) => module.SideNavigation,
);
