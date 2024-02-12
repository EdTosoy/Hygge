import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToggleContext } from "context";
import { OAuthOptions, PrimaryButton } from "components";
import { ToggleContextType } from "@types";
import { SignInFormProps } from "./types";

export const SignInForm = ({ showFooter }: SignInFormProps) => {
  const { toggleModal } = useContext(ToggleContext) as ToggleContextType;
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="p-14 shadow-2xl rounded-2xl">
      <h1 className="font-medium text-3xl">{t("translation.button.signIn")}</h1>
      <form className="">
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-8"
          type="text"
          placeholder={t("translation.input.emailOrUsername")}
        />

        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-8"
          type="password"
          placeholder={t("translation.input.password")}
        />
        <p className="cursor-pointer text-xs text-semi-gray text-right mb-12">
          {t("translation.button.forgotPassword")}
        </p>
        <PrimaryButton
          text={t("translation.button.signIn")}
          className="mt-5 py-4 rounded-xl font-semibold w-full"
        />
        <p className="text-semi-gray text-center my-11">
          {t("translation.authenticationPage.oAuthTitle")}
        </p>
        <OAuthOptions />
        {showFooter && (
          <footer className="grid place-content-center  mt-5">
            <p>
              {t("translation.authenticationPage.createNewAccount")}
              <span
                className="text-dark-violet cursor-pointer ml-4 font-semibold"
                onClick={() => {
                  toggleModal();
                  navigate("/auth");
                }}
              >
                {t("translation.button.signUp")}
              </span>
            </p>
          </footer>
        )}
      </form>
    </div>
  );
};
