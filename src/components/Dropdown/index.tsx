import { IconContainer } from "components";
import { DropdownProps } from "./types";

export const Dropdown = ({ showDropdown, toggleDropdown }: DropdownProps) => {
  return (
    <div
      className="relative dropdown grid place-content-center "
      onClick={() => toggleDropdown()}
    >
      <IconContainer>
        <ion-icon name="chevron-down-outline" />
      </IconContainer>
      {showDropdown && (
        <div className="w-252 border border-light-gray bg-white z-10 absolute top-12 right-0 rounded-md shadow-lg text-sm ">
          <div className="p-5 border-b border-light-gray">
            <div className="flex items-center gap-2 text-semi-gray">
              <IconContainer className="text-2xl">
                <ion-icon name="planet-outline" />
              </IconContainer>
              <h2>My Stuff</h2>
            </div>
            <div className="pl-8">
              <p className="my-4">Online Status </p>
              <p className="my-4 cursor-pointer">Profile </p>
              <p className="my-4 cursor-pointer">Create Avatar </p>
              <p className="my-4 cursor-pointer">User Settings </p>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 text-semi-gray">
              <IconContainer className="text-2xl">
                <ion-icon name="cloudy-night-outline" />
              </IconContainer>
              <h2>Theme Preference</h2>
            </div>
            <div className="pl-8">
              <p className="my-4">Dark Mode </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
