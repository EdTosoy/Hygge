import { Dropdown } from "components";
import { ToggleContext, ToggleProvider } from "context";
import { ToggleContextType } from "@types";
import { useContext } from "react";

describe("<DropDown />", () => {
  const { showDropdown, toggleDropdown } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ToggleProvider>
        <Dropdown showDropdown={showDropdown} toggleDropdown={toggleDropdown} />
      </ToggleProvider>,
    );
  });
});
