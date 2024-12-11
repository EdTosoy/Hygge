import { lazyLoad } from "utils";
export const Messages = lazyLoad(
  () => import("./index"),
  (module) => module.Messages,
);
