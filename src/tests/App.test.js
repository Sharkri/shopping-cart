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
  },
]);

jest.mock("../components/Shop.js", () => ({ products }) => (
  <div data-testid="products">{JSON.stringify(products)}</div>
));

jest.mock("uniqid", () => () => 1);

it("should fetch products properly", () => {
  render(<App />);
  const shop = screen.getByRole("link", { name: "Shop" });
  userEvent.click(shop);
  const products = JSON.parse(screen.getByTestId("products").textContent);
  expect(products[0]).toEqual({
    name: "testy",
    path: "/path/that/exists",
    description: "test desc",
    id: 1,
    price: "$29.99",
    image: "a.png",
  });
});
