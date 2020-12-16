// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("allows logging-in and registering from the home page", () => {
    cy.visit("/");
    cy.contains("h3", "Login or Register");

    // 2 input buttons
    cy.get("input").should("have.length", 2);
  })

  it("displays data on the content page", () => {
    cy.visit("/content");
    cy.contains("h2", "Content Page");
  })

  it("has requires logging-in on the verifier page", () => {
    cy.visit("/verifier");
    cy.contains("h2", "Verifier Page");
    cy.contains("p", "You must be logged in.");
  })
})
