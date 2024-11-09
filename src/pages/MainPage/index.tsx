import { useContext } from "react";
import { SignInForm } from "features";
import { useAppSelector } from "hooks";
import { selectUserInfo } from "src/features/auth/selectors";
import { ToggleContext } from "context";
import { SideNavigation } from "containers";
import { ToggleContextType } from "@types";
import { MainPageProps } from "./types";

export const MainPage = ({ children }: MainPageProps) => {
  const { toggleModal, setModalContent } = useContext(
    ToggleContext,
  ) as ToggleContextType;
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
            <div className="p-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
