import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

jest.mock("../components/Shop.js", () => ({ products }) => (
  <div data-testid="products">{JSON.stringify(products)}</div>
));

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
