import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

test("renders", () => {
  render(<NotFound />);

  expect(screen.getByText(/Page Not Found/)).not.toBeNull();
});
