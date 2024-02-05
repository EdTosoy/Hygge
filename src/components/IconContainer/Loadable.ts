import { lazyLoad } from "../../utils/loadable";

export const IconContainer = lazyLoad(
  () => import("./index"),
  (module) => module.IconContainer,
);
