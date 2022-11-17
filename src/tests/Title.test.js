import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "../components/Title";

jest.mock("react-router-dom", () => ({
  Link: (props) => <a href={props.to}>{props.children}</a>,
}));

it("should display title correctly", () => {
  render(<Title title="Test Title" />);

  expect(screen.getByRole("link", { name: "Test Title" })).toHaveAttribute(
    "href",
    "/"
  );
});
