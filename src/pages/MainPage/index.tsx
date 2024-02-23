import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { SignInForm } from "features";
import { useAppSelector } from "hooks";
import { selectUserInfo } from "src/features/auth/selectors";
import { ToggleContext } from "context";
import { HomeFeed, SideNavigation } from "containers";
import { ToggleContextType } from "@types";
import { HOME_ROUTE, POPULAR_ROUTE } from "src/constants";

export const MainPage = () => {
  const { toggleModal, setModalContent } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const { pathname } = useLocation();
  const { _id } = useAppSelector(selectUserInfo) || {};
  const handleOnClickMainContainer = () => {
    if (!_id) {
      setModalContent(<SignInForm showFooter />);
      toggleModal();
    }
  };

  return (
    <div className="body-grid-container" onClick={handleOnClickMainContainer}>
      <div className="col-start-2 col-end-3 main-grid-container ">
        <SideNavigation />
        <div className="col-start-2 col-end-3">
          <div className="bg-white main-section-height">
            <div className="p-6">
              {pathname === HOME_ROUTE && <HomeFeed />}
              {pathname === POPULAR_ROUTE && <HomeFeed />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
