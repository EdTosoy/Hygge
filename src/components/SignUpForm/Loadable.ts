import { lazyLoad } from "utils";

export const SignUpForm = lazyLoad(
  () => import("./index"),
  (module) => module.SignUpForm,
);
