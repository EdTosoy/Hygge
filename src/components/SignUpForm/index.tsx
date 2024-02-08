import { useTranslation } from "react-i18next";
import { OAuthOptions, PrimaryButton } from "components";

export const SignUpForm = () => {
  const { t } = useTranslation();
  return (
    <div className="p-14 shadow-2xl rounded-2xl">
      <h1 className="font-medium text-3xl">{t("translation.button.signUp")}</h1>
      <form className="pt-7">
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="text"
          placeholder={t("translation.input.username")}
        />
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="email"
          placeholder={t("translation.input.email")}
        />
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="password"
          placeholder={t("translation.input.password")}
        />
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="password"
          placeholder={t("translation.input.confirmPassword")}
        />

        <PrimaryButton
          text={t("translation.button.signUp")}
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
