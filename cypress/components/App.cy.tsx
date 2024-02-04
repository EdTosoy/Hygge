import App from "../../src/App.tsx";

describe("<App />", () => {
  it("renders", () => {
    cy.mount(<App />);
  });
});
