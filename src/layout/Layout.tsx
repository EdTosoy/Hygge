import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "hooks";
import { Header } from "containers";
import { AuthenticationHeader, ModalContainer } from "components";
import { selectBasicUserInfo } from "src/features/auth/selectors";
import { ToggleContext } from "context";
import { LayoutProps } from "./types";
import { ToggleContextType } from "@types";
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
