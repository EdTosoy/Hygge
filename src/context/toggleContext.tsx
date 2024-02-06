// context/todoContext.tsx
import React, { useState } from "react";

export type ToggleContextType = {
  showNotificationPanel: boolean;
  toggleDropdown: () => void;
  showDropdown: boolean;
  toggleNotificationPanel: () => void;
};

export const ToggleContext = React.createContext<ToggleContextType | null>(
  null,
);

const ToggleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowNotificationPanel(false);
  };
  const toggleNotificationPanel = () => {
    setShowNotificationPanel(!showNotificationPanel);
    setShowDropdown(false);
  };

  return (
    <ToggleContext.Provider
      value={{
        showDropdown,
        showNotificationPanel,
        toggleDropdown,
        toggleNotificationPanel,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
