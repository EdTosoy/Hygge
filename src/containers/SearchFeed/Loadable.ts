import { lazyLoad } from "utils";
export const SearchFeed = lazyLoad(
  () => import("./index"),
  (module) => module.SearchFeed,
);
