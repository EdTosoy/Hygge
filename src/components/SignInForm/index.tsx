import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToggleContext } from "context";
import { OAuthOptions, PrimaryButton } from "components";
import { ToggleContextType } from "@types";
import { SignInFormInput, SignInFormProps } from "./types";

export const SignInForm = ({ showFooter }: SignInFormProps) => {
  const { toggleModal } = useContext(ToggleContext) as ToggleContextType;
  const { register, handleSubmit, reset } = useForm<SignInFormInput>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInFormInput> = (data) => {
    const { emailOrUsername, password } = data;
    axios
      .post("/api/user/login", {
        email: emailOrUsername,
        password: password,
      })
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
      <h1 className="font-medium text-3xl">{t("translation.button.signIn")}</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-8"
          type="text"
          placeholder={t("translation.input.emailOrUsername")}
          {...register("emailOrUsername")}
        />

        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-8"
          type="password"
          placeholder={t("translation.input.password")}
          {...register("password")}
        />
        <p className="cursor-pointer text-xs text-semi-gray text-right mb-12">
          {t("translation.button.forgotPassword")}
        </p>
        <PrimaryButton
          text={t("translation.button.signIn")}
          className="mt-5 py-4 rounded-xl font-semibold w-full"
          type="submit"
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
