import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

jest.mock("../products.json", () => [
  {
    name: "testy",
    path: "/path/that/exists",
    description: "test desc",
    price: "$29.99",
    image: "a.png",
    id: 24,
  },
]);

jest.mock("../helpers/loadImage.js", () => (image) => image);

jest.mock("../components/Shop.js", () => ({ products }) => (
  <div data-testid="products">{JSON.stringify(products)}</div>
));

jest.mock("../components/Searchbar.js", () => () => <div>searchbar open</div>);

it("should fetch products properly", () => {
  render(<App />);
  const shop = screen.getByRole("link", { name: "Shop" });
  userEvent.click(shop);
  const products = JSON.parse(screen.getByTestId("products").textContent);
  expect(products[0]).toEqual({
    name: "testy",
    path: "/path/that/exists",
    description: "test desc",
    id: 24,
    price: "$29.99",
    image: "a.png",
  });
});

it("should open searchbar on click", () => {
  render(<App />);

  const openSearchbar = screen.getByRole("button", { name: "open searchbar" });

  expect(screen.queryByText("searchbar open")).not.toBeInTheDocument();

  userEvent.click(openSearchbar);

  expect(screen.getByText("searchbar open")).toBeInTheDocument();
});
