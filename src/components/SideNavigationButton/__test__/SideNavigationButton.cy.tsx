import { SideNavigationButton } from "components";

describe("<SideNavigationButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <SideNavigationButton
        ionIconName="close"
        text="close"
        isActive
        key={1}
      />,
    );
  });
});
