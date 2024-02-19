import { useLocation } from "react-router";
import { SignInForm, SignUpForm } from "containers";
import { SIGN_IN } from "src/constants";

export const AuthenticationForm = () => {
  const { search } = useLocation();
  const isSignIn = search === SIGN_IN;

  return <div>{isSignIn ? <SignInForm /> : <SignUpForm />}</div>;
};
