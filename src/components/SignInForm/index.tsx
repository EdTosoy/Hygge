import { useTranslation } from "react-i18next";
import { OAuthOptions, PrimaryButton } from "components";

export const SignInForm = () => {
  const { t } = useTranslation();
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
      </form>
    </div>
  );
};
