import { lazyLoad } from "utils";

export const AddPost = lazyLoad(
  () => import("./index"),
  (module) => module.ImageUpload,
);
