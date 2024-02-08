import { AuthenticationHeader } from "components";
import { useContext } from "react";
import { ToggleContext } from "context";
import { ToggleContextType } from "@types";

describe("<AuthenticationHeader />", () => {
  it("renders", () => {
    const { authenticationForm, toggleAuthenticationForm } = useContext(
      ToggleContext,
    ) as ToggleContextType;
    // see: https://on.cypress.io/mounting-react
    // cy.mount(<AuthenticationHeader isForSignIn={false}>);
    cy.mount(
      <AuthenticationHeader
        authenticationForm={authenticationForm}
        toggleAuthenticationForm={toggleAuthenticationForm}
      />,
    );
  });
});
