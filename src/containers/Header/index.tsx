import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "hooks";
import { selectUserInfo } from "src/features/auth/selectors";
import { SignInForm, AddPost, Contacts } from "features";
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
import { AUTH_ROUTE } from "src/constants";
import { UserInfo } from "src/features/auth/types";

export const Header = ({ isLoggedIn }: HeaderProps) => {
  const {
    showNotificationPanel,
    showDropdown,
    toggleDropdown,
    toggleNotificationPanel,
    toggleModal,
    setModalContent,
  } = useContext(ToggleContext) as ToggleContextType;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const { username, avatar, _id } = useAppSelector(selectUserInfo) as UserInfo;

  const handleOnClickSignIn = () => {
    setModalContent(<SignInForm showFooter />);
    toggleModal();
  };

  const handleOnClickAddPost = () => {
    setModalContent(<AddPost />);
    toggleModal();
  };

  return (
    <div className="fixed top-0 z-40 grid place-content-center w-full border-b border-light-gray">
      <div className="bg-white body-grid-container ">
        <div className="col-start-2 col-end-3  ">
          <header className="flex py-2 relative justify-between">
            <Logo isForAuthentication />
            <div className="grid place-items-center ">
              <input
                type="text"
                placeholder="Search"
                className="px-10 py-3 text-xs font-light bg-light-violet text-dark-violet placeholder-dark-violet rounded-full w-607 focus:outline-none focus:ring-2 focus:ring-light-violet focus:ring-opacity-50"
              />
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
                    <IconContainer
                      className="text-2xl cursor-pointer"
                      onClick={handleOnClickAddPost}
                    >
                      <ion-icon name="add-circle-outline" />
                    </IconContainer>
                  </div>
                  <Profile
                    showStatus
                    username={username}
                    avatar={avatar}
                    profileUserId={_id}
                  />
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
                  onClick={() => navigate(AUTH_ROUTE)}
                />
                <PrimaryButton
                  className="py-2 px-8 rounded-full "
                  text={t("translation.button.signIn")}
                  type="button"
                  onClick={handleOnClickSignIn}
                />
              </div>
            )}
            <Contacts />
          </header>
        </div>
      </div>
    </div>
  );
};
