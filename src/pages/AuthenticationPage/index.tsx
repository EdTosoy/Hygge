import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ToggleContext } from "context";
import { SignInForm, SignUpForm } from "components";
import HeroPNG from "/src/assets/Hero.svg";
import { ToggleContextType } from "@types";
import { signIn } from "src/constants";

export const AuthenticationPage = () => {
  const { authenticationForm } = useContext(ToggleContext) as ToggleContextType;

  const { t } = useTranslation();
  const navigate = useNavigate();
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

          <div>
            {authenticationForm === signIn ? <SignInForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </div>
  );
};
