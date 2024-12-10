import { lazyLoad } from "utils";
export const Contacts = lazyLoad(
  () => import("./index"),
  (module) => module.Contacts,
);
