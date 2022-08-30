import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders with Add Expense", () => {
  render(<App />);
  const linkElement = screen.getByText(/Add Expense/i);
  expect(linkElement).toBeInTheDocument();
});

