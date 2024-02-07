import React from "react";
import { SideNavigation } from "../../src/containers/SideNavigation/index";

describe("<SideNavigation />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideNavigation />);
  });
});
