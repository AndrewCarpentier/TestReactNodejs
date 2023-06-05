import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodo from "./AddTodo";

describe("<AddTodo/> test", () => {
  it("add new todo to list", async () => {
    // Prepare mock data
    const mockTodo = {
      content: "add todo test",
      edit: false,
      done: false,
    };
    const mockId = 0;
    const mockAddTodo = jest.fn();

    // Mock the fetch function to return a response with the generated ID
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ...mockTodo, id: mockId }),
      })
    );

    // Render the component
    render(<AddTodo addTodo={mockAddTodo} />);

    // Interact with the UI
    const input = screen.getByLabelText("addTodoInput");
    const button = screen.getByLabelText("addTodoButton");
    fireEvent.change(input, { target: { value: mockTodo.content } });
    fireEvent.click(button);

    // Assert the expected behavior
    await waitFor(
      () => {
        expect(mockAddTodo).toHaveBeenCalledTimes(1);
      },
      { timeout: 2000 }
    );

    await waitFor(
      () => {
        expect(mockAddTodo).toHaveBeenCalledWith({ ...mockTodo, id: mockId });
      },
      { timeout: 2000 }
    );

    // Restore the original fetch function
    global.fetch.mockRestore();
  });

  it("doesn't add an empty todo", async () => {
    const mockTodo = {
        content: "",
        edit: false,
        done: false,
      };
      const mockId = 0;
      const mockAddTodo = jest.fn();
  
      // Mock the fetch function to return a response with the generated ID
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ ...mockTodo, id: mockId }),
        })
      );
  
      // Render the component
      render(<AddTodo addTodo={mockAddTodo} />);
  
      // Interact with the UI
      const input = screen.getByLabelText("addTodoInput");
      const button = screen.getByLabelText("addTodoButton");
      fireEvent.change(input, { target: { value: mockTodo.content } });
      fireEvent.click(button);
  
      // Assert the expected behavior
      await waitFor(
        () => {
          expect(mockAddTodo).toHaveBeenCalledTimes(0);
        },
        { timeout: 2000 }
      );
  
      await waitFor(
        () => {
          expect(mockAddTodo).not.toHaveBeenCalledWith({ ...mockTodo, id: mockId });
        },
        { timeout: 2000 }
      );
  
      // Restore the original fetch function
      global.fetch.mockRestore();
  });
});
