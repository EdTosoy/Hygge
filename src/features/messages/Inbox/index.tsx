import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "hooks";
import { createMessage } from "../api";
import { IconContainer } from "src/components";
import { socket } from "src/socket";
import { createMessageInput, IMessage } from "./types";

export const Inbox = () => {
  const dispatch = useAppDispatch();
  const [messages, setMessages] = useState<string[]>([]);

  const { handleSubmit, register, reset } = useForm<createMessageInput>();

  useEffect(() => {
    socket.on("newMessage", (msg: IMessage) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        `${msg.messageFrom.username}: ${msg.message}`,
      ]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

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
      <div>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit(submit)}>
          <input type="text" {...register("message")} />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
