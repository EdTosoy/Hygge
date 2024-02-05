import { IconContainer } from "../index";

interface DropdownProps {
  showNotificationPanel: boolean;
  setShowNotificationPanel: React.Dispatch<React.SetStateAction<boolean>>;
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Dropdown = ({
  setShowNotificationPanel,
  showNotificationPanel,
  showDropdown,
  setShowDropdown,
}: DropdownProps) => {
  return (
    <>
      <IconContainer>
        <div
          className="dropdown grid place-content-center"
          onClick={() => {
            if (showNotificationPanel) setShowNotificationPanel(false);
            setShowDropdown((prev) => !prev);
          }}
        >
          <ion-icon name="chevron-down-outline" />
          {showDropdown && (
            <div className="w-72 h-96 border border-light-gray bg-white z-10 absolute top-14 right-0 rounded-md shadow-lg"></div>
          )}
        </div>
      </IconContainer>
    </>
  );
};
