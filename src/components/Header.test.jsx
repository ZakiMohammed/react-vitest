import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

test("renders", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  expect(screen.getByText(/React Vitest/)).not.toBeNull();
  expect(screen.getByText(/Home/)).not.toBeNull();
  expect(screen.getByText(/Users/)).not.toBeNull();
  expect(screen.getByText(/Notes/)).not.toBeNull();
  expect(screen.getByText(/About/)).not.toBeNull();
});
