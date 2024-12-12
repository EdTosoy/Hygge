import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAppDispatch } from "hooks";
import { signUp } from "../api";
import { OAuthOptions, PrimaryButton } from "components";
import { SignUpFormInput } from "./types";
import { SIGN_IN } from "src/constants";

export const SignUpForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<SignUpFormInput>();

  const onSubmit: SubmitHandler<SignUpFormInput> = async (data) => {
    const { confirmPassword, password, email, username } = data;
    if (confirmPassword !== password) {
      console.log("password not match!");
    }
    if (email && username) {
      try {
        await dispatch(
          signUp({ email, password, confirmPassword, username }),
        ).unwrap();
        reset();
        navigate(SIGN_IN);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("there is no email, password, confirmPassword, username");
    }
  };

  return (
    <div className="p-14 shadow-2xl rounded-2xl">
      <h1 className="font-medium text-3xl">{t("translation.button.signUp")}</h1>
      <form className="pt-7" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-325 px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          placeholder={t("translation.input.username")}
          {...register("username")}
        />

        <input
          className="w-325 px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="email"
          placeholder={t("translation.input.email")}
          {...register("email")}
        />
        <input
          className="w-325 px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="password"
          placeholder={t("translation.input.password")}
          {...register("password")}
        />
        <input
          className="w-325 px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
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
