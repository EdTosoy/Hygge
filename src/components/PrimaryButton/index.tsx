import { PrimaryButtonProps } from "./types";

export const PrimaryButton = ({
  text,
  className,
  onClick,
  type,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`grid place-content-center bg-dark-violet  text-white border  border-dark-violet hover:bg-dark-violet hover:text-white hover:ring-2 hover:ring-dark-violet hover:ring-opacity-50 shadow-3xl shadow-dark-violet ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
