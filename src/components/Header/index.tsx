import { Logo, Profile, Dropdown, IconContainer } from "../index";

export const Header = () => {
  return (
    <header className="flex justify-between py-2">
      <Logo />
      <div className="grid place-items-center">
        <input
          type="text"
          placeholder="Search"
          className="px-8 py-3 text-sm bg-light-violet text-dark-violet placeholder-dark-violet rounded-full w-large focus:outline-none focus:ring-2 focus:ring-light-violet focus:ring-opacity-50"
        />
      </div>
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
    </header>
  );
};
