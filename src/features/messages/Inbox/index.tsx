import { IconContainer } from "src/components";

type Props = {};

export const Inbox = (props: Props) => {
  return (
    <div className="fixed bottom-0 right-0 pr-5 ">
      <div className="py-3 px-5 border rounded-tr-xl rounded-tl-xl border-light-gray shadow-lg flex justify-between  cursor-pointer w-293">
        <div> Messages</div>
        <div className="flex gap-5">
          <IconContainer className="text-2xl" hasNotification>
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
          </IconContainer>
          <IconContainer className="text-2xl">
            <ion-icon name="chevron-up-outline"></ion-icon>
          </IconContainer>
        </div>
      </div>
    </div>
  );
};
