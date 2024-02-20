import facebookLogo from "src/assets/facebook.svg";
import googleLogo from "src/assets/google.svg";
import appleLogo from "src/assets/apple.svg";

export const OAuthOptions = () => {
  return (
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
  );
};
