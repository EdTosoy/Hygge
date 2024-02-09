import { SecondaryButtonProps } from "./types";

export const SecondaryButton = ({
  text,
  className,
  onClick,
}: SecondaryButtonProps) => {
  return (
    <button
      className={`grid place-content-center text-dark-violet border  border-dark-violet   hover:bg-dark-violet hover:text-white hover:ring-2 hover:ring-dark-violet hover:ring-opacity-50 shadow-3xl shadow-dark-violet  ${className}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
