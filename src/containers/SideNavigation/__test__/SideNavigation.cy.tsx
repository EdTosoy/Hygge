import { SideNavigation } from "containers";

describe("<SideNavigation />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideNavigation />);
  });
});
