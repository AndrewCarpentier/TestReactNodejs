describe("delete todo", () => {
  // Define the content value for the mock todo
  const mockTodoContentValue = "add todo end-to-end test";

  before(() => {
    // Visit the specified URL in the Cypress browser
    cy.visit("http://localhost:3000");

    // Find the input field by its name attribute, clear its content, and type the mock todo content value
    cy.get("input[name='addTodoInput']").clear().type(mockTodoContentValue);

    // Find the button by its name attribute and click it
    cy.get("button[name='addTodoButton']").click();

    // Assert that the todo list contains the mock todo content value
    cy.get("ul[name='todoList']").should("contain", mockTodoContentValue);
  });

  it("delete the 'add todo end-to-end test' from the todo list", () => {
    // Find the button by its name attribute with the corresponding delete text and click it
    cy.get(`button[name="delete ${mockTodoContentValue}"]`).click();

    // Assert that the todo list does not contain the mock todo content value
    cy.get("ul[name='todoList']").should("not.contain", mockTodoContentValue);
  });
});
