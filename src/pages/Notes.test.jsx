import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Notes from "./Notes";

test("renders", () => {
  render(<Notes />);

  expect(screen.getByText(/Notes/)).not.toBeNull();
});
