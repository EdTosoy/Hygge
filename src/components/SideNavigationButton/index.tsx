import { IconContainer } from "components";
import { SideNavigationButtonProps } from "./types";

export const SideNavigationButton = ({
  isActive,
  text,
  ionIconName,
}: SideNavigationButtonProps) => {
  return (
    <button
      type="button"
      className={` w-full  text-left px-5 py-3 font-medium text-xs rounded-xl flex gap-3 items-center ${isActive && "bg-light-violet text-dark-violet"} `}
    >
      <IconContainer className="text-2xl">
        <ion-icon name={ionIconName}></ion-icon>
      </IconContainer>
      <h1>{text}</h1>
    </button>
  );
};
