import Nav from "../components/Nav";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

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
});
