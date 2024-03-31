import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  render(<App />);
  
  expect(screen.getAllByText("React Vitest").length).not.toBe(0);
});
