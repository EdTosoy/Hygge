import { lazyLoad } from "utils";

export const AuthenticationPage = lazyLoad(
  () => import("./index"),
  (module) => module.AuthenticationPage,
);
