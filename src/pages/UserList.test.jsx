import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("renders", () => {
  render(<UserList />);

  expect(screen.getByText(/Users/)).not.toBeNull();
});
