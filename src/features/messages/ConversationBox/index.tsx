import { useState, useEffect, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { IconContainer, Profile, PrimaryButton } from "components";
import { socket } from "src/socket";
import { createMessageInput, IMessage } from "./types";
import { createMessage } from "../api";
import { useAppDispatch } from "hooks";
import { ToggleContext } from "context";
import { ToggleContextType } from "@types";

export const ConversationBox = () => {
  const dispatch = useAppDispatch();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { handleSubmit, register, reset } = useForm<createMessageInput>();

  const { toggleShowConversationBox } = useContext(
    ToggleContext,
  ) as ToggleContextType;

  const submit: SubmitHandler<createMessageInput> = async (data) => {
    if (data.message) {
      try {
        const sentMessage = await dispatch(
          createMessage({
            message: data.message,
            messageTo: {
              userId: "60b8f1f5e6b4c3001f9e2f3f",
              username: "ko",
              avatar: "https://avatars.githubusercontent.com/u/66432631?v=4",
            },
          }),
        ).unwrap();
        socket.emit("sendMessage", sentMessage);
        reset();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("there is no content or Not Authorize ");
    }
  };

  useEffect(() => {
    socket.on("newMessage", (msg: IMessage) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  return (
    <div className="w-470 h-600 bg-white py-3 px-5 pb-10 border rounded-tr-xl rounded-tl-xl border-light-gray shadow-lg ">
      <div className=" flex justify-between py-3 ">
        <div>{"New Message"}</div>
        <div className="flex gap-5">
          <IconContainer
            className="text-2xl"
            onClick={() => toggleShowConversationBox()}
          >
            <ion-icon name="close-outline"></ion-icon>
          </IconContainer>
        </div>
      </div>
      <div className="flex flex-col h-full">
        <ul className="flex-grow  p-2 rounded-md">
          {messages.map(({ messageFrom, message }, index) => (
            <li key={index} className="py-2">
              <Profile
                avatar={messageFrom.avatar}
                username={messageFrom.username}
                profileUserId={messageFrom.userId}
              />
              <p className="ml-11 ">{message}</p>
            </li>
          ))}
        </ul>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col items-end py-3"
        >
          <div className="w-full">
            <textarea
              {...register("message")}
              className="w-full p-2 border border-gray"
              rows={3}
            />
          </div>
          <PrimaryButton
            type="submit"
            text="Send"
            className="px-6 py-1 rounded-full text-sm mt-1"
          />
        </form>
      </div>
    </div>
  );
};
