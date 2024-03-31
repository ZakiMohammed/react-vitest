import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

test("renders", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  expect(screen.getByText(/testing framework/)).not.toBeNull();
});
