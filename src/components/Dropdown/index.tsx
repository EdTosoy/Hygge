import { useState } from "react";
import { IconContainer } from "../index";

export const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <IconContainer>
        <div
          className="dropdown grid place-content-center"
          onClick={() => {
            setShowDropdown((prev) => !prev);
          }}
        >
          <ion-icon name="chevron-down-outline" />
          {showDropdown && (
            <div className="w-72 h-96 border border-light-gray bg-white z-10 absolute top-14 right-0 rounded-md shadow-lg"></div>
          )}
        </div>
      </IconContainer>
    </>
  );
};
