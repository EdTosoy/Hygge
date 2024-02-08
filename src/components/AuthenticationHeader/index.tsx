import { useTranslation } from "react-i18next";
import { Logo } from "components";
import { AuthenticationHeaderProps } from "./types";
import { signIn } from "src/constants";

export const AuthenticationHeader = ({
  authenticationForm,
  toggleAuthenticationForm,
}: AuthenticationHeaderProps) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white body-grid-container  ">
      <div className="col-start-2 col-end-3 py-8">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            <p>
              {authenticationForm === signIn
                ? t("translation.authenticationPage.createNewAccount")
                : t("translation.authenticationPage.alreadyHaveAnAccount")}
              <span
                className="text-dark-violet cursor-pointer ml-4 font-semibold"
                onClick={toggleAuthenticationForm}
              >
                {authenticationForm === signIn
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
