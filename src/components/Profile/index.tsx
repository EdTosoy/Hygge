import { useNavigate } from "react-router";
import { useAppSelector } from "hooks";
import { selectBasicUserInfo } from "src/features/auth/selectors";
import { ProfileProps } from "./types";
import { PROFILE_ROUTE } from "src/constants";

export const Profile = ({ showStatus, userProfile, date }: ProfileProps) => {
  const navigate = useNavigate();
  const { username } = useAppSelector(selectBasicUserInfo) || {};
  return (
    <div className="w-195 flex items-center">
      <div className="flex items-center gap-4   ">
        <div>
          <div className="w-8 h-8 bg-gray-500 rounded-full relative">
            {showStatus && (
              <div className="w-2.5 h-2.5 bg-accent-green rounded-full absolute bottom-0 right-0 z-10 " />
            )}
          </div>
        </div>
        <div>
          <h2
            className="cursor-pointer leading-tight"
            onClick={() => navigate(PROFILE_ROUTE)}
          >
            {userProfile?.username || username}
          </h2>
          <p className="text-2xs ">{date}</p>
        </div>
      </div>
    </div>
  );
};
