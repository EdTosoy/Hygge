import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { HomePage, SideNavigation } from "containers";
import { SignInForm } from "components";
import { ToggleContext } from "context";
import { ToggleContextType } from "@types";

export const MainPage = () => {
  const { toggleModal, setModalContent } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const { pathname } = useLocation();

  const handleOnClickMainContainer = () => {
    setModalContent(<SignInForm showFooter />);
    toggleModal();
  };
  return (
    <div className="body-grid-container" onClick={handleOnClickMainContainer}>
      <div className="col-start-2 col-end-3 main-grid-container ">
        <SideNavigation />
        <div className="col-start-2 col-end-3">
          <div className="bg-white main-section-height">
            {/* /// remove h-screen  */}
            <div className="p-6 h-screen">
              {pathname === "/home" && <HomePage />}
              {pathname === "/popular" && <HomePage />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
