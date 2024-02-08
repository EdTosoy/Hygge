import facebookLogo from "assets/facebook.svg";
import googleLogo from "assets/google.svg";
import appleLogo from "assets/apple.svg";

export const SignInForm = () => {
  return (
    <div className="p-14 shadow-2xl rounded-2xl">
      <h1 className="font-medium text-3xl">Sign In</h1>
      <form className="">
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-8"
          type="text"
          placeholder="Enter email or user name"
        />

        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-8"
          type="password"
          placeholder="Password"
        />
        <p className="cursor-pointer text-xs text-semi-gray text-right mb-12">
          forgot password ?
        </p>
        <button className="flex items-center justify-center bg-dark-violet w-full mt-5 text-white font-semibold rounded-xl py-4 hover:bg-dark-violet hover:text-white hover:ring-2 hover:ring-dark-violet hover:ring-opacity-50 shadow-3xl shadow-dark-violet">
          <div className="">Sign In</div>
        </button>
        <p className="text-semi-gray text-center my-11">or continue with</p>
        <div className="grid place-content-center">
          <div className="flex gap-5 ">
            <div className="grid place-content-center cursor-pointer">
              <img src={facebookLogo} alt="facebook logo" />
            </div>
            <div className="grid place-content-center cursor-pointer">
              <img src={appleLogo} alt="apple logo" />
            </div>
            <div className="grid place-content-center cursor-pointer">
              <img src={googleLogo} alt="google logo" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
