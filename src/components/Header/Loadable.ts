import { lazyLoad } from "../../utils/loadable";
export const Header = lazyLoad(
  () => import("./index"),
  (module) => module.Header,
);
