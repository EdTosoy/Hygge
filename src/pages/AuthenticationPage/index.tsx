import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SignInForm, SignUpForm } from "features";
import HeroPNG from "/src/assets/Hero.svg";
import { useContext } from "react";
import { ToggleContext } from "context";
import { ToggleContextType } from "@types";


export const AuthenticationPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuthSignIn } = useContext(
    ToggleContext,
  ) as ToggleContextType;

  return (
    <div>
      <div className="body-grid-container">
        <div className="col-start-2 col-end-3 flex justify-between ">
          <div>
            <div className="flex items-center">
              <div>
                <h1 className="text-5xl font-semibold my-3">
                  {t("translation.authenticationPage.heroTitle")}
                  <span className="text-dark-violet">
                    {t("translation.authenticationPage.heroTitleSpan")}
                  </span>
                </h1>
                <h3 className="font-medium text-3xl max-w-422">
                  {t("translation.authenticationPage.heroSubtitle")}
                </h3>
              </div>
              <div>
                <img src={HeroPNG} alt="hero png" width={313} height={556} />
              </div>
            </div>
            <p
              className="cursor-pointer text-semi-gray"
              onClick={() => navigate(-1)}
            >
              {t("translation.button.goBackToHome")}
            </p>
          </div>
          <div>{isAuthSignIn ? <SignInForm /> : <SignUpForm />}</div>
        </div>
      </div>
    </div>
  );
};
