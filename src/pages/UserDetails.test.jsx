import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import UserDetails from "./UserDetails";

test("renders", () => {
  render(<UserDetails />);

  expect(screen.getByText(/User Details/)).not.toBeNull();
});
