import { lazyLoad } from "../../utils/loadable";
export const SideNavigation = lazyLoad(
  () => import("./index"),
  (module) => module.SideNavigation,
);
