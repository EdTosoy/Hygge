import { SecondaryButton } from "components";

describe("<SecondaryButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <SecondaryButton className="py-2 px-8 rounded-full" text="Sign Up" />,
    );
  });
});
