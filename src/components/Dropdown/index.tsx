import { IconContainer } from "../index";

interface DropdownProps {
  showDropdown: boolean;
  toggleDropdown: () => void;
}
export const Dropdown = ({ showDropdown, toggleDropdown }: DropdownProps) => {
  return (
    <>
      <IconContainer>
        <div
          className="dropdown grid place-content-center"
          onClick={() => toggleDropdown()}
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
