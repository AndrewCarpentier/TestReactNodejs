import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("<TodoList/> test", () => {
  it("verify <TodoList/> show all items", () => {
    // Prepare the mock todo list
    const mockTodoList = [
      { id: 1, content: "first todo", edit: false, done: false },
      { id: 2, content: "second todo", edit: false, done: false },
      { id: 3, content: "third todo", edit: false, done: false },
    ];

    // Render the component with the mock todo list
    render(<TodoList todoList={mockTodoList} />);

    // Retrieve the list items from the rendered component
    const listItem = screen.getAllByRole("listitem");
    // Retrieve the first todo from the rendered component
    const firstTodo = screen.getByText("first todo");

    // Assert the expected behavior
    expect(listItem.length).toEqual(3); // Check that there are 3 list items rendered
    expect(firstTodo).toHaveTextContent("first todo"); // Check that the first todo is rendered with the correct content
  });

  it("verify <TodoList/> when list is empty", () => {
    // Prepare the mock empty list
    const mockEmptyList = [];

    // Render the component with the empty todo list
    render(<TodoList todoList={mockEmptyList} />);

    // Retrieve the empty list text from the rendered component
    const emptyListText = screen.getByTestId("emptyListText");

    // Assert the expected behavior
    expect(emptyListText).toHaveTextContent("Aucune todo pour le moment"); // Check that the empty list text is rendered with the correct content
  });
});
