import { Logo } from "components";

export const AuthenticationHeader = () => {
  return (
    <div className="bg-white body-grid-container  ">
      <div className="col-start-2 col-end-3 py-8">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="">
            <p>
              Already have an account ?{" "}
              <span className="text-dark-violet cursor-pointer ml-4 font-semibold">
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
