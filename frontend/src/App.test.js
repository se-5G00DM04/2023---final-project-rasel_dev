import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import App from "./App";

test("renders learn react link", () => {
  act(() => {
    render(<App />);
  });
  const headerElement = screen.getByText(/Shopping List/i);
  expect(headerElement).toBeInTheDocument();
});
