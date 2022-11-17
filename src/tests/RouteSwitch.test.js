import { render, screen } from "@testing-library/react";
import RouteSwitch from "../RouteSwitch";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ path, element }) => {
    return (
      <>
        <div data-testid="path">{path}</div>
        <div data-testid="element">{element}</div>
      </>
    );
  },
}));

const Header = () => <h1>HEADER PAGE!</h1>;
const pages = [
  { path: "/", element: "test element", id: 1 },
  { path: "/test", element: "test element2", id: 2 },
];

it("should render header and routes properly", () => {
  render(<RouteSwitch Header={Header} pages={pages} />);

  expect(
    screen.getByRole("heading", { name: "HEADER PAGE!" })
  ).toBeInTheDocument();

  const path = screen.getAllByTestId("path");
  const element = screen.getAllByTestId("element");

  expect(path[0].textContent).toBe("/");
  expect(element[0].textContent).toBe("test element");

  expect(path[1].textContent).toBe("/test");
  expect(element[1].textContent).toBe("test element2");
});
