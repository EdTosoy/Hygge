import { lazyLoad } from "utils";

export const MainPage = lazyLoad(
  () => import("./index"),
  (module) => module.MainPage,
);
