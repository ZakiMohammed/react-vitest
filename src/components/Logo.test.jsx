import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  test("renders", () => {
    render(<Logo />);

    expect(screen.getByAltText("Logo")).not.toBeNull();
  });

  test("props", () => {
    render(<Logo classNames={"test-logo"} height={"10px"} />);

    const element = screen.getByAltText("Logo");

    expect(element).toHaveStyle({ height: "10px" });
    expect(element).toHaveClass("test-logo");
  });
});
