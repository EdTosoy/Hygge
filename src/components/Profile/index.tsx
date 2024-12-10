import { useNavigate } from "react-router";
import { ProfileProps } from "./types";
export const Profile = ({
  showStatus,
  date,
  userAvatar,
  username,
  avatar,
  profileUserId,
}: ProfileProps) => {
  const navigate = useNavigate();

  const onClickProfile = () => {
    navigate(`/profile/${profileUserId}`);
  };
  return (
    <div className="w-195 flex items-center">
      <div className="flex items-center gap-3   ">
        <div>
          <div className="relative ">
            <img
              src={userAvatar ? userAvatar : avatar}
              alt="avatar"
              className="rounded-full  w-8 h-8"
            />
            {showStatus && (
              <div className="w-2.5 h-2.5 bg-accent-green rounded-full absolute bottom-0 right-0 z-10 " />
            )}
          </div>
        </div>
        <div>
          <h2
            className="cursor-pointer leading-tight text-xs font-medium"
            onClick={() => onClickProfile()}
          >
            {username}
          </h2>
          <p className="text-2xs ">{date}</p>
        </div>
      </div>
    </div>
  );
};
