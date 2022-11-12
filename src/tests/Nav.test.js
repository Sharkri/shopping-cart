import Nav from "../components/Nav";
import { render, screen } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  Link: (props) => (
    <>
      <div data-testid="name">{props.children}</div>
      <div data-testid="to">{props.to}</div>
    </>
  ),
}));

const links = [
  { name: "Home", to: "/", id: 69 },
  { name: "Shop", to: "/shop", id: 70 },
];

describe("nav", () => {
  it("should pass in correct props to <Link/>, url and name", async () => {
    render(<Nav links={links} />);

    const names = screen.getAllByTestId("name");
    const urls = screen.getAllByTestId("to");

    expect(names[0].textContent).toMatch(/Home/i);
    expect(urls[0].textContent).toMatch("/");

    expect(names[1].textContent).toMatch(/Shop/i);
    expect(urls[1].textContent).toMatch("/shop");
  });
});
