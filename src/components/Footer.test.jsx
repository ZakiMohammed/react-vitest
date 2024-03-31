import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders", () => {
  render(<Footer />);

  const year = new Date().getFullYear();
  expect(screen.getByText(new RegExp(year))).not.toBeNull();
  expect(screen.getAllByAltText("Logo")).not.toBeNull();
  expect(screen.getByText(/React Vitest/)).not.toBeNull();
});
