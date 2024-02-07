import { SideNavigationButton } from "components";

export const SideNavigation = () => {
  const navigationButtons = {
    primary: [
      { ionIconName: "home-outline", text: "Home" },
      { ionIconName: "rocket-outline", text: "Popular", isActive: true },
    ],
    categories: [
      { ionIconName: "pie-chart-outline", text: "Arts" },
      { ionIconName: "musical-notes-outline", text: "Music" },
      { ionIconName: "videocam-outline", text: "Video Editing" },
      { ionIconName: "game-controller-outline", text: "Gaming" },
      { ionIconName: "desktop-outline", text: "Information Technology" },
      { ionIconName: "business-outline", text: "Business Administration" },
    ],
    resources: [
      { ionIconName: "cafe-outline", text: "About" },
      { ionIconName: "help-circle-outline", text: "Help" },
      { ionIconName: "briefcase-outline", text: "Careers" },
      { ionIconName: "reader-outline", text: "FAQ" },
    ],
  };
  const isButtonActive = Boolean(false);
  return (
    <div className="w-238  border-r border-light-gray">
      <div className="border-b border-light-gray py-3">
        {navigationButtons.primary.map((button, index) => (
          <SideNavigationButton
            key={index}
            ionIconName={button.ionIconName}
            text={button.text}
            isActive={button.isActive}
          />
        ))}
      </div>
      <div className="border-b border-light-gray">
        <h1 className="py-6 pl-5 text-xs uppercase">Categories</h1>
        {navigationButtons.categories.map((button, index) => (
          <SideNavigationButton
            key={index}
            ionIconName={button.ionIconName}
            text={button.text}
            isActive={isButtonActive}
          />
        ))}
        <p className="py-6 pl-5 text-xs font-medium ">See more</p>
      </div>
      <div>
        <h1 className="py-6 pl-5 text-xs uppercase">Resources</h1>
        {navigationButtons.resources.map((button, index) => (
          <SideNavigationButton
            key={index}
            ionIconName={button.ionIconName}
            text={button.text}
          />
        ))}
        <p className="py-6 pl-5 text-2xs text-semi-gray">
          all rights reserved Hygge © 2024.
        </p>
      </div>
    </div>
  );
};

export const sum = (numbers: number[]): number => {
  return numbers.reduce((total, number) => total + number, 0);
};
