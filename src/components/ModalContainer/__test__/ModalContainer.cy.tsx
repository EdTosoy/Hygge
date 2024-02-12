import { ModalContainer } from "components";

describe("<ModalContainer />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ModalContainer modalContent={<div>Modal Content</div>} />);
  });
});
