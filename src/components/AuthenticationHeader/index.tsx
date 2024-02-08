import { Logo } from "components";
import { AuthenticationHeaderProps } from "./types";

export const AuthenticationHeader = ({
  authenticationForm,
  toggleAuthenticationForm,
}: AuthenticationHeaderProps) => {
  return (
    <div className="bg-white body-grid-container  ">
      <div className="col-start-2 col-end-3 py-8">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="">
            <p>
              {authenticationForm === "sign-in"
                ? "Create new account ?"
                : "Already have an account ?"}
              <span
                className="text-dark-violet cursor-pointer ml-4 font-semibold"
                onClick={toggleAuthenticationForm}
              >
                {authenticationForm === "sign-in" ? "Sign Up" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
