import { SideNavigation } from "../index.tsx";

describe("<SideNavigation />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideNavigation />);
  });
});
