import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { SignInForm } from "features";
import { HomePage, SideNavigation } from "containers";
import { ToggleContext } from "context";
import { useAppSelector } from "hooks";
import { selectBasicUserInfo } from "src/features/auth/selectors";
import { HOME_ROUTE, POPULAR_ROUTE } from "src/constants";
import { ToggleContextType } from "@types";

export const MainPage = () => {
  const { toggleModal, setModalContent } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const { pathname } = useLocation();
  const { _id } = useAppSelector(selectBasicUserInfo) || {};
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
            {/* /// remove h-screen  */}
            <div className="p-6 h-screen">
              {pathname === HOME_ROUTE && <HomePage />}
              {pathname === POPULAR_ROUTE && <HomePage />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
