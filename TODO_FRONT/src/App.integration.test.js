import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("<App/> integration test", () => {
  it("add and show in the list", async () => {
    const mockValue = "test"
    render(<App />);
    const input = screen.getByLabelText("addTodoInput");
    const button = screen.getByLabelText("addTodoButton");
    fireEvent.change(input, {
      target: { value: mockValue },
    });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(mockValue)).toBeInTheDocument();
    });
  });
});
