import { render, screen } from "@testing-library/react";
import Title from "../components/Title";

jest.mock("react-router-dom", () => ({
  Link: (props) => <a href={props.to}>{props.children}</a>,
}));

it("should display title correctly", () => {
  render(<Title title="Test Title" />);

  const title = screen.getByRole("link", { name: "Test Title" });
  expect(title.href).toBe("http://localhost/");
});
