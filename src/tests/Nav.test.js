import Nav from "../components/Nav";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const links = [
  { name: "Home", to: "/" },
  { name: "Shop", to: "/shop" },
];

describe("nav", () => {
  it("should navigate to a different page correctly", () => {
    render(
      <BrowserRouter>
        <Nav links={links} />
      </BrowserRouter>
    );

    const shop = screen.getByRole("link", { name: "Shop" });
    const home = screen.getByRole("link", { name: "Home" });

    expect(window.location.href).toBe("http://localhost/");

    userEvent.click(shop);
    expect(window.location.href).toBe("http://localhost/shop");

    userEvent.click(home);
    expect(window.location.href).toBe("http://localhost/");
  });
});
