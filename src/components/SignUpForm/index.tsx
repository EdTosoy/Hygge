import { useTranslation } from "react-i18next";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { OAuthOptions, PrimaryButton } from "components";
import { SignUpFormInput } from "./types";

export const SignUpForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm<SignUpFormInput>();

  const onSubmit: SubmitHandler<SignUpFormInput> = async (data) => {
    const { confirmPassword, password } = data;
    if (confirmPassword !== password) {
      console.log("password not match!");
    }
    axios
      .post("/api/user/register", data)
      .then(function (response) {
        console.log(response);
        reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="p-14 shadow-2xl rounded-2xl">
      <h1 className="font-medium text-3xl">{t("translation.button.signUp")}</h1>
      <form className="pt-7" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          placeholder={t("translation.input.username")}
          {...register("username")}
        />

        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="email"
          placeholder={t("translation.input.email")}
          {...register("email")}
        />
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="password"
          placeholder={t("translation.input.password")}
          {...register("password")}
        />
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="password"
          placeholder={t("translation.input.confirmPassword")}
          {...register("confirmPassword")}
        />

        <PrimaryButton
          text={t("translation.button.signUp")}
          className="mt-5 py-4 rounded-xl font-semibold w-full"
          type="submit"
        />
        <p className="text-semi-gray text-center my-11">
          {t("translation.authenticationPage.oAuthTitle")}
        </p>
        <OAuthOptions />
      </form>
    </div>
  );
};
