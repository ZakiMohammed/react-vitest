import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "./About";

test("renders", () => {
  render(<About />);

  expect(screen.getByText(/testing framework/)).not.toBeNull();
});
