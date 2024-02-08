import { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Dropdown,
  IconContainer,
  Logo,
  PrimaryButton,
  Profile,
  SecondaryButton,
} from "components";
import { ToggleContext } from "context";
import { HeaderProps } from "./types";
import { ToggleContextType } from "@types";

export const Header = ({ isLoggedIn }: HeaderProps) => {
  const {
    showNotificationPanel,
    showDropdown,
    toggleDropdown,
    toggleNotificationPanel,
  } = useContext(ToggleContext) as ToggleContextType;
  const { t } = useTranslation();
  return (
    <header className="flex py-2  ">
      <div className="flex justify-between">
        <Logo isForAuthentication />
        <div className="grid place-items-center w-660">
          <input
            type="text"
            placeholder="Search"
            className="px-10 py-3 text-xs font-light bg-light-violet text-dark-violet placeholder-dark-violet rounded-full w-large focus:outline-none focus:ring-2 focus:ring-light-violet focus:ring-opacity-50"
          />
        </div>
      </div>

      {isLoggedIn ? (
        <>
          <div className="flex justify-between gap-6">
            <div className="flex items-center gap-3">
              <IconContainer hasNotification>
                <div
                  className="dropdown grid place-content-center text-2xl cursor-pointer"
                  onClick={() => toggleNotificationPanel()}
                >
                  <ion-icon name="notifications-outline" />
                  {showNotificationPanel && (
                    <div className="w-325 h-376 border border-light-gray bg-white z-10 absolute top-10 left-0 rounded-md shadow-lg grid place-content-center">
                      <div>
                        <h1 className="font-semibold text-sm ">
                          {t("translation.notificationPanel.message")}
                        </h1>
                        <p className="text-xs max-w-52 text-semi-gray py-2 text-center">
                          {t("translation.notificationPanel.placeholder")}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </IconContainer>
              <IconContainer className="text-2xl cursor-pointer">
                <ion-icon name="add-circle-outline" />
              </IconContainer>
            </div>
            <Profile />
          </div>
          <Dropdown
            toggleDropdown={toggleDropdown}
            showDropdown={showDropdown}
          />
        </>
      ) : (
        <div className="flex justify-between gap-5 items-center">
          <SecondaryButton
            className="py-2 px-8 rounded-full"
            text={t("translation.button.signUp")}
          />
          <PrimaryButton
            className="py-2 px-8 rounded-full "
            text={t("translation.button.signIn")}
          />
        </div>
      )}
    </header>
  );
};
