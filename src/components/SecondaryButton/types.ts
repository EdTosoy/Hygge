import { MouseEventHandler } from "react";

export interface SecondaryButtonProps {
  text: string;
  className?: string | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
