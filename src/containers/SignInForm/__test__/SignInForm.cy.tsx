import { SignInForm } from "containers";

describe("<SignInForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignInForm />);
  });
});
