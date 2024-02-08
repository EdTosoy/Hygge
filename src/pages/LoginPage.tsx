import { AuthenticationHeader, SignInForm } from "components";
import HeroPNG from "/src/assets/Hero.svg";

export const LoginPage = () => {
  return (
    <div>
      <AuthenticationHeader />
      <div className="body-grid-container">
        <div className="col-start-2 col-end-3 flex ">
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
          <div className="">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};
