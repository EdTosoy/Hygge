import { useNavigate } from "react-router";

interface LogoProps {
  // convert to path chec, if it is for authentication, if it is for authentication then remove padding
  isForAuthentication?: boolean;
}
export const Logo = ({ isForAuthentication }: LogoProps) => {
  const navigate = useNavigate();
  return (
    // convert to path chec, if it is for authentication, if it is for authentication then remove padding
    <div
      className={`py-2 w-238 ${isForAuthentication && "px-5"}`}
      onClick={() => navigate("/home")}
    >
      <div className="flex  gap-1 cursor-pointer">
        <h1 className="text-xl font-semibold">Hygge</h1>
        <h1 className="grid place-content-center">
          <div className="text-logo-red text-2xl grid place-content-center">
            <ion-icon name="heart" />
          </div>
        </h1>
      </div>
    </div>
  );
};
