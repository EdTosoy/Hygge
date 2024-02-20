import { useContext } from "react";
import { useNavigate } from "react-router";
import { ToggleContext } from "context";
import { useAppDispatch } from "hooks";
import { lagout } from "src/containers/AuthenticationForm/slice";
import { IconContainer } from "components";
import { ToggleContextType } from "@types";
import { DropdownProps } from "./types";
import { HOME_ROUTE } from "src/constants";

export const Dropdown = ({ showDropdown, toggleDropdown }: DropdownProps) => {
  const { darkMode, setDarkMode, onlineStatus, setOnlineStatus } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLagout = async () => {
    try {
      await dispatch(lagout()).unwrap();
      localStorage.removeItem("userInfo");
      navigate(HOME_ROUTE);
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div
      className="relative dropdown grid place-content-center "
      onClick={() => toggleDropdown()}
    >
      <IconContainer>
        <ion-icon name="chevron-down-outline" />
      </IconContainer>
      {showDropdown && (
        <div className="w-252 border border-light-gray bg-white z-10 absolute top-12 right-0 rounded-md shadow-lg text-sm font-medium ">
          <div className="p-5 border-b border-light-gray">
            <div className="flex items-center gap-2 text-semi-gray font-normal">
              <IconContainer className="text-2xl">
                <ion-icon name="planet-outline" />
              </IconContainer>
              <h2>My Stuff</h2>
            </div>
            <div className="pl-8">
              <div
                className="my-4 flex items-center justify-between"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOnlineStatus(!onlineStatus);
                }}
              >
                <p>Online Status</p>
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    aria-label="input"
                    type="checkbox"
                    className="sr-only peer"
                    checked={onlineStatus}
                    readOnly
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-dark-violet  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dark-violet"></div>
                </label>
              </div>
              <p className="my-4 cursor-pointer">Profile </p>
              <p className="my-4 cursor-pointer">Create Avatar </p>
              <p className="my-4 cursor-pointer">User Settings </p>
              <p className="my-4 cursor-pointer" onClick={handleLagout}>
                Logout
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 text-semi-gray font-normal">
              <IconContainer className="text-2xl">
                <ion-icon name="cloudy-night-outline" />
              </IconContainer>
              <h2>Theme Preference</h2>
            </div>
            <div className="pl-8">
              <div
                className="my-4 flex items-center justify-between"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDarkMode(!darkMode);
                }}
              >
                <p>Dark Mode</p>
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    aria-label="input"
                    type="checkbox"
                    className="sr-only peer"
                    checked={darkMode}
                    readOnly
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-dark-violet  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dark-violet"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
