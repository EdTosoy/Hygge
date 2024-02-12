export type ToggleContextType = {
  showNotificationPanel: boolean;
  toggleDropdown: () => void;
  showDropdown: boolean;
  toggleNotificationPanel: () => void;
  authenticationForm: "sign-in" | "sign-up";
  toggleAuthenticationForm: () => void;
  showModal: boolean;
  toggleModal: any;
  modalContent: React.ReactNode;
  setModalContent: React.Dispatch<React.ReactNode>;
};
