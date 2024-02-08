import { Dispatch, SetStateAction } from "react";

export interface AuthenticationHeaderProps {
  isForSignIn: boolean;
  setIsForSignIn: Dispatch<SetStateAction<boolean>>;
}
