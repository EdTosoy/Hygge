import { lazyLoad } from "utils";

export const ModalContainer = lazyLoad(
  () => import("./index"),
  (module) => module.ModalContainer,
);
