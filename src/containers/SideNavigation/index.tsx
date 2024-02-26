import { useTranslation } from "react-i18next";
import { SideNavigationButton } from "components";
import { useLocation, useNavigate } from "react-router";
import {
  ABOUT_ROUTE,
  HELP_ROUTE,
  HOME_ROUTE,
  POPULAR_ROUTE,
} from "src/constants";

export const SideNavigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navigationButtons = {
    primary: [
      {
        ionIconName: "home-outline",
        text: t("translation.sideNavigation.icons.home"),
        url: HOME_ROUTE,
      },
      {
        ionIconName: "rocket-outline",
        text: t("translation.sideNavigation.icons.popular"),
        isActive: true,
        url: POPULAR_ROUTE,
      },
    ],
    categories: [
      {
        ionIconName: "pie-chart-outline",
        text: t("translation.sideNavigation.icons.arts"),
        url: "/community/arts",
      },
      {
        ionIconName: "musical-notes-outline",
        text: t("translation.sideNavigation.icons.music"),
        url: "/community/music",
      },
      {
        ionIconName: "videocam-outline",
        text: t("translation.sideNavigation.icons.videoEditing"),
        url: "/community/video-editing",
      },
      {
        ionIconName: "game-controller-outline",
        text: t("translation.sideNavigation.icons.gaming"),
        url: "/community/gaming",
      },
      {
        ionIconName: "desktop-outline",
        text: t("translation.sideNavigation.icons.informationTechnology"),
        url: "/community/information-technology",
      },
      {
        ionIconName: "business-outline",
        text: t("translation.sideNavigation.icons.businessAdministration"),
        url: "/community/business-administration",
      },
    ],
    resources: [
      {
        ionIconName: "cafe-outline",
        text: t("translation.sideNavigation.icons.about"),
        url: ABOUT_ROUTE,
      },
      {
        ionIconName: "help-circle-outline",
        text: t("translation.sideNavigation.icons.help"),
        url: HELP_ROUTE,
      },
      {
        ionIconName: "briefcase-outline",
        text: t("translation.sideNavigation.icons.careers"),
        url: "/careers",
      },
      {
        ionIconName: "reader-outline",
        text: t("translation.sideNavigation.icons.faq"),
        url: "/faq",
      },
    ],
  };

  return (
    <div className="w-238  border-r border-light-gray fixed ">
      <div className="border-b border-light-gray py-3">
        {navigationButtons.primary.map((button, index) => (
          <SideNavigationButton
            onClick={() => navigate(button.url)}
            key={index}
            ionIconName={button.ionIconName}
            text={button.text}
            isActive={pathname === button.url}
          />
        ))}
      </div>
      <div className="border-b border-light-gray">
        <h1 className="py-5 pl-5 text-xs uppercase">
          {t("translation.sideNavigation.categories")}
        </h1>
        {navigationButtons.categories.map((button, index) => (
          <SideNavigationButton
            onClick={() => navigate(button.url)}
            key={index}
            ionIconName={button.ionIconName}
            text={button.text}
            isActive={pathname === button.url}
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
            onClick={() => navigate(button.url)}
            key={index}
            ionIconName={button.ionIconName}
            text={button.text}
            isActive={pathname === button.url}
          />
        ))}
        <p className="py-6 pl-5 text-2xs text-semi-gray">
          {t("translation.sideNavigation.allRighsReserved")}
        </p>
      </div>
    </div>
  );
};
