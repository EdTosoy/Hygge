import { IconContainer } from "components";

describe("<IconContainer />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <IconContainer>
        <ion-icon name="close" />
      </IconContainer>,
    );
  });
});
