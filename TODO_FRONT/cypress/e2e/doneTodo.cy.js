describe("done todo", () => {
  it("click for done a todo", () => {
    // Define the content value for the mock todo
    const mockTodoDone = "just a todo";

    // Visit the specified URL in the Cypress browser
    cy.visit("http://localhost:3000");

    // Find the button by its name attribute and click it
    cy.get("button[name='addTodoButton']").click();

    // Assert that the todo list contains the mock todo content value
    cy.get("ul[name='todoList']").should("contain", mockTodoDone);

    // Find the button by its name attribute with the corresponding done text and click it
    cy.get(`button[name="done ${mockTodoDone}"]`).click();

    // Assert that the button text changes to "Réalisé"
    cy.get(`button[name="done ${mockTodoDone}"]`).should("contain", "Réalisé");

    // Assert that the list item contains the mock todo content value
    cy.get(`li[name="${mockTodoDone}"]`).should("contain", mockTodoDone);

    cy.get(`button[name="done ${mockTodoDone}"]`).click();
    cy.get(`button[name="done ${mockTodoDone}"]`).should("contain", "A faire");

  });
});
