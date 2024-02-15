import { MouseEventHandler } from "react";

export interface PrimaryButtonProps {
  text: string;
  className?: string | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type: "button" | "reset" | "submit" | undefined;
}
