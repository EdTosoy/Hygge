export type ToggleContextType = {
  showNotificationPanel: boolean;
  toggleDropdown: () => void;
  showDropdown: boolean;
  toggleNotificationPanel: () => void;
  showModal: boolean;
  toggleModal: any;
  modalContent: React.ReactNode;
  setModalContent: React.Dispatch<React.ReactNode>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<boolean>;
  onlineStatus: boolean;
  setOnlineStatus: React.Dispatch<boolean>;
};
