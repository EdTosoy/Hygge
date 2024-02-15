import React, { useState } from "react";
import { ToggleContextType } from "@types";

export const ToggleContext = React.createContext<ToggleContextType | null>(
  null,
);

export const ToggleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowNotificationPanel(false);
  };
  const toggleNotificationPanel = () => {
    setShowNotificationPanel(!showNotificationPanel);
    setShowDropdown(false);
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
        showModal,
        toggleModal,
        modalContent,
        setModalContent,
        darkMode,
        setDarkMode,
        onlineStatus,
        setOnlineStatus,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};
