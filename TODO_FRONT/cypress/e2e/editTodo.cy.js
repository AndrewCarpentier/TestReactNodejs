describe("edit todo", () => {
  // Define the content value for the mock todo
  const mockTodo = "A todo that will be modify";
  const mockTodoEdit = "A todo just modify";

  it("edit a todo and save", () => {
    // Visit the specified URL in the Cypress browser
    cy.visit("http://localhost:3000");

    // Find the input field by its name attribute, clear its content, and type the mock todo content value
    cy.get("input[name='addTodoInput']").clear().type(mockTodo);

    // Find the button by its name attribute and click it to add the todo to the list
    cy.get("button[name='addTodoButton']").click();

    // Find the button by its name attribute with the corresponding edit text and click it
    cy.get(`button[name='edit ${mockTodo}']`).click();

    // Find the input field for editing by its name attribute, clear its content, and type the modified todo content value
    cy.get("input[name='edit input']").clear().type(mockTodoEdit);

    // Find the button by its name attribute with the corresponding save text and click it to save the changes
    cy.get("button[name='edit save']").click();

    // Assert that the todo list contains the modified todo content value
    cy.get("ul[name='todoList']").should("contain", mockTodoEdit);

    cy.get(`button[name="delete ${mockTodoEdit}"]`).click();
  });

  it("edit a todo and cancel", () => {
    // Visit the specified URL in the Cypress browser
    cy.visit("http://localhost:3000");

    // Find the button by its name attribute with the corresponding edit text and click it
    cy.get(`button[name='edit ${mockTodoEdit}']`).click();

    // Find the input field for editing by its name attribute, clear its content, and type the original todo content value
    cy.get("input[name='edit input']").clear().type(mockTodo);

    // Find the button by its name attribute with the corresponding cancel text and click it to cancel the changes
    cy.get("button[name='edit cancel']").click();

    // Assert that the todo list still contains the modified todo content value
    cy.get("ul[name='todoList']").should("contain", mockTodoEdit);
  });
});
