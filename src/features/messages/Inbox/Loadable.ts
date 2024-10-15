import { lazyLoad } from "utils";
export const Inbox = lazyLoad(
  () => import("./index"),
  (module) => module.Inbox,
);
