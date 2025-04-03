import { useTranslation } from "react-i18next";
import { Logo } from "components";
import { AuthenticationHeaderProps } from "./types";
import { useLocation } from "react-router";
import { SIGN_IN, } from "src/constants";
import { useContext } from "react";
import { ToggleContextType } from "@types";
import { ToggleContext } from "context";

export const AuthenticationHeader = ({ }: AuthenticationHeaderProps) => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const isSignIn = search === SIGN_IN;
  const { isAuthSignIn, setIsAuthSignIn } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const handleClick = () => {
    if (isAuthSignIn) { setIsAuthSignIn(false) }
    else { setIsAuthSignIn(true) }
  };
  return (
    <div className="bg-white body-grid-container  ">
      <div className="col-start-2 col-end-3 py-8">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            <p>
              {isSignIn
                ? t("translation.authenticationPage.createNewAccount")
                : t("translation.authenticationPage.alreadyHaveAnAccount")}
              <span
                className="text-dark-violet cursor-pointer ml-4 font-semibold"
                onClick={handleClick}
              >
                {isSignIn
                  ? t("translation.button.signUp")
                  : t("translation.button.signIn")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
