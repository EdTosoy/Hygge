// context/todoContext.tsx
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
  const [authenticationForm, setAuthenticationForm] = useState<
    "sign-in" | "sign-up"
  >("sign-in");
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowNotificationPanel(false);
  };
  const toggleNotificationPanel = () => {
    setShowNotificationPanel(!showNotificationPanel);
    setShowDropdown(false);
  };
  const toggleAuthenticationForm = () => {
    if (authenticationForm === "sign-in") {
      setAuthenticationForm("sign-up");
    } else {
      setAuthenticationForm("sign-in");
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
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};
