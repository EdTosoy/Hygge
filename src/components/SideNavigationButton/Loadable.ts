import { lazyLoad } from "../../utils/loadable";

export const SideNavigationButton = lazyLoad(
  () => import("./index"),
  (module) => module.SideNavigationButton,
);
