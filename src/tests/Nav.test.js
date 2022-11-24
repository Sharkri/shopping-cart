import Nav from "../components/Nav";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("nav", () => {
  it("should navigate to href properly", async () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute(
      "href",
      "/shop"
    );
  });

  it("should display amount in cart", () => {
    render(
      <BrowserRouter>
        <Nav cartAmount={27} />
      </BrowserRouter>
    );

    expect(screen.getByText(27)).toBeInTheDocument();
  });

  it("does not show amount in cart if is 0", () => {
    render(
      <BrowserRouter>
        <Nav cartAmount={0} />
      </BrowserRouter>
    );

    expect(screen.queryByText(0)).not.toBeInTheDocument();
  });

  it("should display 99+ if cart amount is over 99", () => {
    render(
      <BrowserRouter>
        <Nav cartAmount={69420} />
      </BrowserRouter>
    );

    expect(screen.getByText("99+")).toBeInTheDocument();
  });

  it("should add shake", () => {
    render(
      <BrowserRouter>
        <Nav canShake={true} />
      </BrowserRouter>
    );

    const cartLink = screen.getByRole("link", { name: "cart link" });

    expect(cartLink.className.includes("shake")).toBeTruthy();
  });
  it("should not add shake when canShake is false", () => {
    render(
      <BrowserRouter>
        <Nav canShake={false} />
      </BrowserRouter>
    );

    const cartLink = screen.getByRole("link", { name: "cart link" });

    expect(cartLink.className.includes("shake")).toBeFalsy();
  });

  it("should call onOpenSearchbar", () => {
    const mockOnSearchbarOpen = jest.fn();

    render(
      <BrowserRouter>
        <Nav onSearchbarOpen={mockOnSearchbarOpen} />
      </BrowserRouter>
    );

    const openSearchbar = screen.getByRole("button", {
      name: "open searchbar",
    });

    expect(mockOnSearchbarOpen).not.toHaveBeenCalled();

    userEvent.click(openSearchbar);

    expect(mockOnSearchbarOpen).toHaveBeenCalledTimes(1);
  });
});
