import { useContext } from "react";
import { IconContainer } from "src/components";
import { ToggleContext } from "context";
import { ToggleContextType } from "@types";

export const Inbox = () => {
  const { showMessages, toggleShowMessages, toggleShowConversationBox } =
    useContext(ToggleContext) as ToggleContextType;

  const onClickCreateNewMessage = (e) => {
    e.stopPropagation();
    e.preventDefault();

    toggleShowConversationBox();
  };

  return (
    <div
      className="py-3 px-5 border rounded-tr-xl rounded-tl-xl border-light-gray shadow-lg cursor-pointer w-293"
      onClick={() => toggleShowMessages()}
    >
      <div className=" flex justify-between ">
        <div> Messages</div>
        <div className="flex gap-5">
          {showMessages ? (
            <IconContainer
              className="text-2xl"
              onClick={onClickCreateNewMessage}
            >
              <ion-icon name="create-outline"></ion-icon>
            </IconContainer>
          ) : (
            <IconContainer className="text-2xl" hasNotification>
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            </IconContainer>
          )}
          <IconContainer className="text-2xl">
            {showMessages ? (
              <ion-icon name="chevron-down-outline"></ion-icon>
            ) : (
              <ion-icon name="chevron-up-outline"></ion-icon>
            )}
          </IconContainer>
        </div>
      </div>
      {showMessages && <div className="h-700"></div>}
    </div>
  );
};
