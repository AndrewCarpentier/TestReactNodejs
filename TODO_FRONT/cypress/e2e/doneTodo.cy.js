describe("done todo", () => {
  // Define the content value for the mock todo
  const mockTodoDone = "just a todo";

  before(() => {
    cy.visit("http://localhost:3000");
  });

  after(() => {
    cy.get(`button[name="done ${mockTodoDone}"]`).click();
    cy.get(`button[name="done ${mockTodoDone}"]`).should("contain", "A faire");
  });

  it("click for done a todo", () => {
    // Find the button by its name attribute with the corresponding done text and click it
    cy.get(`button[name="done ${mockTodoDone}"]`).click();

    // Assert that the button text changes to "Réalisé"
    cy.get(`button[name="done ${mockTodoDone}"]`).should("contain", "Réalisé");

    // Assert that the list item contains the mock todo content value
    cy.get(`li[name="${mockTodoDone}"]`).should("contain", mockTodoDone + " ✔️");
  });
});
