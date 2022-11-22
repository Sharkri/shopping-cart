import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";

const defaultCart = [
  {
    name: "test",
    path: "/test",
    description: "",
    price: "$45.63",
    image: "img.png",
    id: 1,
  },
  {
    name: "testing2",
    path: "/test/yet-another-test",
    description: "description yes",
    price: "$999.99",
    image: "img2.jpg",
    id: 2,
  },
];

jest.mock("../components/CartItem.js", () => ({ item }) => (
  <div data-testid="cart-item">{JSON.stringify(item)}</div>
));

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

it("renders empty cart message and a link to head to the shop if given an empty cart", () => {
  render(<Cart cart={[]} subtotal="5.10" />);

  expect(
    screen.getByText(/There are currently no items in your cart./i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /Continue shopping/i })
  ).toHaveAttribute("href", "/shop");

  expect(screen.queryByText("$5.10")).not.toBeInTheDocument();
});

it("renders multiple cart items properly", () => {
  render(<Cart cart={defaultCart} />);

  const cartItems = screen.getAllByTestId("cart-item");
  expect(JSON.parse(cartItems[0].textContent)).toEqual(defaultCart[0]);
  expect(JSON.parse(cartItems[1].textContent)).toEqual(defaultCart[1]);
});

it("should display subtotal properly", () => {
  render(<Cart cart={defaultCart} subtotal="120.43" />);

  expect(screen.getByText("$120.43")).toBeInTheDocument();
});
