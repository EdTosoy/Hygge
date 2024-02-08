import { SignUpForm } from "components";

describe("<SignUpForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignUpForm />);
  });
});
