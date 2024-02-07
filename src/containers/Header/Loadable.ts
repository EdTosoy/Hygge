import { lazyLoad } from "utils";
export const Header = lazyLoad(
  () => import("./index"),
  (module) => module.Header,
);
