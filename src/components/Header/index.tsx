import { useState } from "react";
import { Logo, Profile, Dropdown, IconContainer } from "../index";
import { HeaderProps } from "./types";
import { useTranslation } from "react-i18next";

export const Header = ({ isLoggedIn = true }: HeaderProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const { t } = useTranslation();
  return (
    <header className="flex justify-between py-2 gap-5">
      <div className="flex justify-between w-871">
        <Logo />
        <div className="grid place-items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-8 py-3 text-sm bg-light-violet text-dark-violet placeholder-dark-violet rounded-full w-large focus:outline-none focus:ring-2 focus:ring-light-violet focus:ring-opacity-50"
          />
        </div>
      </div>

      {isLoggedIn ? (
        <div className="flex justify-between gap-5">
          <div className="flex items-center gap-5">
            <IconContainer hasNotification>
              <div
                className="dropdown grid place-content-center"
                onClick={() => {
                  if (showDropdown) setShowDropdown(false);
                  setShowNotificationPanel((prev) => !prev);
                }}
              >
                <ion-icon name="notifications-outline" size="large" />
                {showNotificationPanel && (
                  <div className="w-325 h-376 border border-light-gray bg-white z-10 absolute top-11 left-0 rounded-md shadow-lg grid place-content-center">
                    <div>
                      <h1 className="font-semibold text-sm ">
                        {t("translation.notificationMessage")}
                      </h1>
                      <p className="text-xs max-w-52 text-semi-gray py-2 text-center">
                        {t("translation.notificationPlaceholder")}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </IconContainer>
            <IconContainer>
              <ion-icon name="add-circle-outline" size="large" />
            </IconContainer>
          </div>
          <Profile />
          <Dropdown
            showNotificationPanel={showNotificationPanel}
            setShowNotificationPanel={setShowNotificationPanel}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </div>
      ) : (
        <div className="flex justify-between gap-5">
          <div className="grid place-content-center">
            <button className="py-2 px-8 border text-dark-violet border-dark-violet rounded-full hover:bg-dark-violet hover:text-white hover:ring-2 hover:ring-dark-violet hover:ring-opacity-50 shadow-3xl shadow-dark-violet">
              Sign Up
            </button>
          </div>
          <div className="grid place-content-center">
            <button className="py-2 px-8 border  border-dark-violet rounded-full bg-dark-violet text-white hover:ring-2 hover:ring-dark-violet hover:ring-opacity-50 shadow-3xl shadow-dark-violet">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
