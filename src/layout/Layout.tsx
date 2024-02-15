import { useContext } from "react";
import { Header } from "containers";
import { useLocation } from "react-router-dom";
import { ToggleContextType } from "@types";
import { AuthenticationHeader, ModalContainer } from "components";
import { ToggleContext } from "context";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const isAuthPage = pathname === "/auth";
  const { showModal, modalContent, toggleModal } = useContext(
    ToggleContext,
  ) as ToggleContextType;

  const isModalValid = showModal && modalContent;
  const userId = localStorage.getItem("userId");
  const header = () => {
    if (!isAuthPage)
      return (
        <div className="pt-14">
          <Header isLoggedIn={Boolean(userId)} />
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
