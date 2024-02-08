import { lazyLoad } from "utils";

export const SignInForm = lazyLoad(
  () => import("./index"),
  (module) => module.SignInForm,
);
