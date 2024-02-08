import { lazyLoad } from "utils";

export const OAuthOptions = lazyLoad(
  () => import("./index"),
  (module) => module.OAuthOptions,
);
