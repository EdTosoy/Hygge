import { useContext } from "react";
import { Header } from "containers";
import { useLocation } from "react-router-dom";
import { ToggleContextType } from "@types";
import { AuthenticationHeader, ModalContainer } from "components";
import { ToggleContext } from "context";
import { LayoutProps } from "./types";
import { useAppSelector } from "hooks";
import { selectBasicUserInfo } from "src/containers/AuthenticationForm/selectors";
import { AUTH_ROUTE } from "src/constants";

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const { showModal, modalContent, toggleModal } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const { _id } = useAppSelector(selectBasicUserInfo) || {};

  const isAuthPage = pathname === AUTH_ROUTE;

  const isModalValid = showModal && modalContent;
  const header = () => {
    if (!isAuthPage)
      return (
        <div className="pt-14">
          <Header isLoggedIn={Boolean(_id)} />
        </div>
      );
    return <AuthenticationHeader />;
  };
  return (
    <div>
      {header()}
      <main>{children}</main>
      {isModalValid && (
        <div onClick={toggleModal}>
          <ModalContainer modalContent={modalContent} />
        </div>
      )}
    </div>
  );
};
