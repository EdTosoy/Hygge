import React, { useState } from "react";
import { ToggleContextType } from "@types";
import { signIn, signUp } from "src/constants";

export const ToggleContext = React.createContext<ToggleContextType | null>(
  null,
);

export const ToggleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [authenticationForm, setAuthenticationForm] =
    useState<ToggleContextType["authenticationForm"]>(signUp);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowNotificationPanel(false);
  };
  const toggleNotificationPanel = () => {
    setShowNotificationPanel(!showNotificationPanel);
    setShowDropdown(false);
  };
  const toggleAuthenticationForm = () => {
    if (authenticationForm === signIn) {
      setAuthenticationForm(signUp);
    } else {
      setAuthenticationForm(signIn);
    }
  };
  const toggleModal = () => {
    if (showModal === true) {
      setShowModal(false);
      setModalContent(null);
    } else {
      setShowModal(true);
    }
  };

  return (
    <ToggleContext.Provider
      value={{
        showDropdown,
        showNotificationPanel,
        toggleDropdown,
        toggleNotificationPanel,
        authenticationForm,
        toggleAuthenticationForm,
        showModal,
        toggleModal,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};
