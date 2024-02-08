import { useTranslation } from "react-i18next";
import { SideNavigationButton } from "components";

export const SideNavigation = () => {
  const { t } = useTranslation();
  const navigationButtons = {
    primary: [
      {
        ionIconName: "home-outline",
        text: t("translation.sideNavigation.icons.home"),
      },
      {
        ionIconName: "rocket-outline",
        text: t("translation.sideNavigation.icons.popular"),
        isActive: true,
      },
    ],
    categories: [
      {
        ionIconName: "pie-chart-outline",
        text: t("translation.sideNavigation.icons.arts"),
      },
      {
        ionIconName: "musical-notes-outline",
        text: t("translation.sideNavigation.icons.music"),
      },
      {
        ionIconName: "videocam-outline",
        text: t("translation.sideNavigation.icons.videoEditing"),
      },
      {
        ionIconName: "game-controller-outline",
        text: t("translation.sideNavigation.icons.gaming"),
      },
      {
        ionIconName: "desktop-outline",
        text: t("translation.sideNavigation.icons.informationTechnology"),
      },
      {
        ionIconName: "business-outline",
        text: t("translation.sideNavigation.icons.businessAdministration"),
      },
    ],
    resources: [
      {
        ionIconName: "cafe-outline",
        text: t("translation.sideNavigation.icons.about"),
      },
      {
        ionIconName: "help-circle-outline",
        text: t("translation.sideNavigation.icons.help"),
      },
      {
        ionIconName: "briefcase-outline",
        text: t("translation.sideNavigation.icons.careers"),
      },
      {
        ionIconName: "reader-outline",
        text: t("translation.sideNavigation.icons.faq"),
      },
    ],
  };
  const isButtonActive = Boolean(false);

  return (
    <div className="w-238  border-r border-light-gray fixed ">
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
        <h1 className="py-5 pl-5 text-xs uppercase">
          {t("translation.sideNavigation.categories")}
        </h1>
        {navigationButtons.categories.map((button, index) => (
          <SideNavigationButton
            key={index}
            ionIconName={button.ionIconName}
            text={button.text}
            isActive={isButtonActive}
          />
        ))}
        <p className="py-5 pl-5 text-xs font-medium cursor-pointer ">
          {t("translation.input.seeMore")}
        </p>
      </div>
      <div>
        <h1 className="py-5 pl-5 text-xs uppercase">
          {t("translation.sideNavigation.resources")}
        </h1>
        {navigationButtons.resources.map((button, index) => (
          <SideNavigationButton
            key={index}
            ionIconName={button.ionIconName}
            text={button.text}
          />
        ))}
        <p className="py-6 pl-5 text-2xs text-semi-gray">
          {t("translation.sideNavigation.allRighsReserved")}
        </p>
      </div>
    </div>
  );
};

/// remove
export const sum = (numbers: number[]): number => {
  return numbers.reduce((total, number) => total + number, 0);
};
