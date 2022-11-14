import Nav from "../components/Nav";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("nav", () => {
  it("should navigate to href properly", async () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(window.location.href).toBe("http://localhost/");

    const shop = screen.getByRole("link", { name: "Shop" });
    userEvent.click(shop);
    expect(window.location.href).toBe("http://localhost/shop");
  });
});
