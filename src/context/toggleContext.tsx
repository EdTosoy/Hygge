// context/todoContext.tsx
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
