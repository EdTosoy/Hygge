import { IconContainerProps } from "./types";

export const IconContainer = ({
  children,
  hasNotification,
  className,
}: IconContainerProps) => {
  return (
    <div
      className={`icon-container grid place-content-center relative cursor-pointer ${className}`}
    >
      {children}
      {hasNotification && (
        <div className="w-3 h-3 bg-accent-red rounded-full absolute top-0 right-0 z-10 " />
      )}
    </div>
  );
};