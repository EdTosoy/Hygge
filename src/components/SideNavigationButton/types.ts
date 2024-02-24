import { IonIconProperties } from "@types";
import { MouseEventHandler } from "react";

export interface SideNavigationButtonProps {
  isActive?: boolean;
  text: string;
  ionIconName: IonIconProperties["name"];
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
