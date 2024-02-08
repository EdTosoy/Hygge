import { OAuthOptions, PrimaryButton } from "components";

export const SignUpForm = () => {
  return (
    <div className="p-14 shadow-2xl rounded-2xl">
      <h1 className="font-medium text-3xl">Sign Up</h1>
      <form className="pt-7">
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="text"
          placeholder="Create Username"
        ></input>
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="email"
          placeholder="Enter Email"
        ></input>
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="password"
          placeholder="Password"
        ></input>
        <input
          className="px-8 py-4 rounded-xl flex gap-3 items-center bg-light-violet text-dark-violet placeholder:text-violet my-4"
          type="password"
          placeholder="Confirm Password"
        ></input>

        <PrimaryButton
          text="Sign Up"
          className="mt-5 py-4 rounded-xl font-semibold w-full"
        />
        <p className="text-semi-gray text-center my-11">or continue with</p>
        <OAuthOptions />
      </form>
    </div>
  );
};
