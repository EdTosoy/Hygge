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
  const {
    authenticationForm,
    toggleAuthenticationForm,
    showModal,
    modalContent,
  } = useContext(ToggleContext) as ToggleContextType;

  const isModalValid = showModal && modalContent;
  const header = () => {
    if (!isAuthPage)
      return (
        <div className="pt-14">
          <Header isLoggedIn />
        </div>
      );
    return (
      <AuthenticationHeader
        authenticationForm={authenticationForm}
        toggleAuthenticationForm={toggleAuthenticationForm}
      />
    );
  };
  return (
    <div>
      {header()}
      <main>{children}</main>
      {isModalValid && <ModalContainer modalContent={modalContent} />}
    </div>
  );
};
