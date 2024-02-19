import { useTranslation } from "react-i18next";
import { Logo } from "components";
import { AuthenticationHeaderProps } from "./types";
import { useLocation, useNavigate } from "react-router";
import { SIGN_IN, SIGN_UP } from "src/constants";

export const AuthenticationHeader = ({}: AuthenticationHeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { search } = useLocation();
  const isSignIn = search === SIGN_IN;
  const handleClick = () => {
    if (isSignIn) navigate(SIGN_UP);
    else navigate(SIGN_IN);
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
