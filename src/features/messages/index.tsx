import { useContext } from "react";
import { ToggleContext } from "context";
import { ToggleContextType } from "@types";
import { ConversationBox } from "./ConversationBox";
import { Inbox } from "./Inbox";

export const Messages = () => {
  const { showConversationBox } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const storedUser = localStorage.getItem("userInfo");
  if (!storedUser) return null;
  return (
    <div className="fixed bottom-0 right-0 pr-5 flex gap-6 items-end ">
      {showConversationBox && <ConversationBox />}
      <Inbox />
    </div>
  );
};
