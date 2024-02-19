import { lazyLoad } from "utils";

export const AuthenticationForm = lazyLoad(
  () => import("./index"),
  (module) => module.AuthenticationForm,
);
