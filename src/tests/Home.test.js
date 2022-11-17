import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("homepage", () => {
  it("should link to correct href", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByRole("link", { name: "Shop Now" })).toHaveAttribute(
      "href",
      "/shop"
    );
  });
});
