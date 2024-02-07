import { lazyLoad } from "utils";
export const HomePage = lazyLoad(
  () => import("./index"),
  (module) => module.HomePage,
);
