import { lazyLoad } from "utils";

export const Dropdown = lazyLoad(
  () => import("./index"),
  (module) => module.Dropdown,
);
