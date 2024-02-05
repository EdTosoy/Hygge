import { Logo, Profile, Dropdown, IconContainer } from "../index";
import { HeaderProps } from "./types";

export const Header = ({ isLoggedIn = true }: HeaderProps) => {
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
              <ion-icon name="notifications-outline" size="large" />
            </IconContainer>
            <IconContainer>
              <ion-icon name="add-circle-outline" size="large" />
            </IconContainer>
          </div>
          <Profile />
          <Dropdown />
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
