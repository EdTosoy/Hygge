import { OAuthOptions, PrimaryButton } from "components";

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
        <PrimaryButton
          text="Sign In"
          className="mt-5 py-4 rounded-xl font-semibold w-full"
        />
        <p className="text-semi-gray text-center my-11">or continue with</p>
        <OAuthOptions />
      </form>
    </div>
  );
};
