import { SignUpForm } from "features";

describe("<SignUpForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignUpForm />);
  });
});
