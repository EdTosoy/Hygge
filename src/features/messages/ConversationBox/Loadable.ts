import { lazyLoad } from "utils";
export const ConversationBox = lazyLoad(
  () => import("./index"),
  (module) => module.ConversationBox,
);
