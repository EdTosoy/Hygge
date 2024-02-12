import { lazyLoad } from "utils";
export const Layout = lazyLoad(
  () => import("./Layout"),
  (module) => module.Layout,
);
