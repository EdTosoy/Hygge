import { useAppSelector } from "hooks";
import { selectBasicUserInfo } from "src/features/auth/selectors";
import { ProfileProps } from "./types";

export const Profile = ({ showStatus }: ProfileProps) => {
  const { username } = useAppSelector(selectBasicUserInfo) || {};
  return (
    <div className="flex items-center gap-4  w-195 ">
      <div>
        <div className="w-8 h-8 bg-gray-500 rounded-full relative">
          {showStatus && (
            <div className="w-2.5 h-2.5 bg-accent-green rounded-full absolute bottom-0 right-0 z-10 " />
          )}
        </div>
      </div>
      <h2 className="cursor-pointer">{username}</h2>
    </div>
  );
};
