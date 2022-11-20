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
  },
  {
    name: "testing2",
    path: "/test/yet-another-test",
    description: "description yes",
    price: "$999.99",
    image: "img2.jpg",
  },
];

jest.mock("../components/CartItem.js", () => ({ item }) => (
  <div data-testid="cart-item">{JSON.stringify(item)}</div>
));

it('renders "Your cart is empty" when the cart is empty array', () => {
  render(<Cart cart={[]} />);

  expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
});

it("renders multiple cart items properly", () => {
  render(<Cart cart={defaultCart} />);

  const cartItems = screen.getAllByTestId("cart-item");
  expect(JSON.parse(cartItems[0].textContent)).toEqual(defaultCart[0]);
  expect(JSON.parse(cartItems[1].textContent)).toEqual(defaultCart[1]);
});
