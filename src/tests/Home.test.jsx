import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Home from "../screens/Home";

it("should render title on home page", () => {
  render(<Home />);
  const title = screen.getByText(/developer bios/i);
  expect(title).toBeInTheDocument();
});
