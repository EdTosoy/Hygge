import { lazyLoad } from "utils";

export const AuthenticationHeader = lazyLoad(
  () => import("./index"),
  (module) => module.AuthenticationHeader,
);
