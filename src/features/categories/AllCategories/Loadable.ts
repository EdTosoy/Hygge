import { lazyLoad } from "utils";

export const Categories = lazyLoad(
  () => import("./index"),
  (module) => module.AllCategories,
);
