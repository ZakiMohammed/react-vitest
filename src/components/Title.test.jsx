import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { BsPersonHearts } from "react-icons/bs";
import Title from "./Title";

describe("Title", () => {
  test("renders", () => {
    const { container } = render(<Title />);

    expect(container.querySelector('div')).not.toBeNull();
  });

  test("props", () => {
    const { container } = render(<Title title={"Users"} icon={<BsPersonHearts />} />);

    expect(screen.getByText("Users")).not.toBeNull();
    expect(container.querySelector('svg')).not.toBeNull();
  });
});
