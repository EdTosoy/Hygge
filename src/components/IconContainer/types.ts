import { MouseEventHandler } from "react";

export interface IconContainerProps {
  children: React.ReactNode;
  hasNotification?: boolean;
  className?: string | undefined;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}
