import { AuthenticationHeader, SignInForm, SignUpForm } from "components";
import HeroPNG from "/src/assets/Hero.svg";
import { useContext } from "react";
import { ToggleContextType } from "@types";
import { ToggleContext } from "context";

export const AuthenticationPage = () => {
  const { authenticationForm, toggleAuthenticationForm } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  return (
    <div>
      <AuthenticationHeader
        authenticationForm={authenticationForm}
        toggleAuthenticationForm={toggleAuthenticationForm}
      />
      <div className="body-grid-container">
        <div className="col-start-2 col-end-3 flex justify-between ">
          <div>
            <div className="flex items-center">
              <div>
                <h1 className="text-5xl font-semibold my-3">
                  Fuel your <span className="text-dark-violet">Passion</span>
                </h1>
                <h3 className="font-medium text-3xl max-w-422">
                  Enjoy the good things in life with good people.
                </h3>
              </div>
              <div>
                <img src={HeroPNG} alt="hero png" width={313} height={556} />
              </div>
            </div>
            <p className="cursor-pointer text-semi-gray">
              - Go back to Home Page
            </p>
          </div>
          <div>
            {authenticationForm === "sign-in" ? <SignInForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </div>
  );
};
