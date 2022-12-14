import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

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

jest.mock("../components/Searchbar.js", () => ({ onClose }) => (
  <>
    <div>searchbar open</div>
    <button data-testid="close" onClick={onClose}>
      close
    </button>
  </>
));

it("should fetch products properly", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
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

it("should open and close searchbar on click", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const openSearchbar = screen.getByRole("button", { name: "open searchbar" });

  userEvent.click(openSearchbar);

  expect(screen.getByText("searchbar open")).toBeInTheDocument();

  userEvent.click(screen.getByTestId("close"));

  expect(screen.queryByText("searchbar open")).not.toBeInTheDocument();
});
