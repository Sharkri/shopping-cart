import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

jest.mock("../components/ProductItem.js", () => ({ product }) => {
  return <div data-testid="featured-item">{JSON.stringify(product)}</div>;
});

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

  it("should display featured items", () => {
    const featuredItems = [
      {
        name: "a featured item",
        path: "/shop/a-featured-item",
        description: "hello",
        price: "79.22",
        prefix: "$",
        image: "a-featured-item.jpg",
        id: "7",
      },
    ];

    render(
      <BrowserRouter>
        <Home featured={featuredItems} />
      </BrowserRouter>
    );

    expect(JSON.parse(screen.getByTestId("featured-item").textContent)).toEqual(
      featuredItems[0]
    );
  });
});
