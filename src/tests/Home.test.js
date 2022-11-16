import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";

describe("homepage", () => {
  it("should be able to navigate to shop", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(window.location.href).toBe("http://localhost/");

    const goToShop = screen.getByRole("link", { name: "Shop Now" });
    userEvent.click(goToShop);

    expect(window.location.href).toBe("http://localhost/shop");
  });
});
