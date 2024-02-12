import { ModalContainerProps } from "./types";

export const ModalContainer = ({ modalContent }: ModalContainerProps) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {modalContent}
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
