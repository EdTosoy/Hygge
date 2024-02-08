import { OAuthOptions } from "components";

describe("<OAuthOptions />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OAuthOptions />);
  });
});
