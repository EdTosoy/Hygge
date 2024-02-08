import { PrimaryButton } from "components";

describe("<PrimaryButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <PrimaryButton
        text="Sign In"
        className="mt-5 py-4 rounded-xl font-semibold w-full"
      />,
    );
  });
});
