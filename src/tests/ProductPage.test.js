import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductPage from "../components/ProductPage";
import "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

const product = {
  name: "Product Name",
  description: "This product is cool.",
  path: "/products/cool-product",
  price: "69.99",
  prefix: "$",
  image: "test-image.png",
};

it("should render name, description, price, and image", () => {
  render(<ProductPage product={product} />);

  expect(
    screen.getByRole("heading", { name: "Product Name" })
  ).toBeInTheDocument();

  expect(screen.getByText("This product is cool.")).toBeInTheDocument();

  expect(screen.getByText("$69.99")).toBeInTheDocument();

  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("alt", "Product Name");
  expect(image).toHaveAttribute("src", "test-image.png");
});

it("should display no description provided", () => {
  const newProduct = { ...product, description: "" };
  render(<ProductPage product={newProduct} />);
  expect(screen.getByText("No description provided.")).toBeInTheDocument();
});

it("should call onAddToCart with correct params", () => {
  const mockAddToCart = jest.fn();

  render(<ProductPage onAddToCart={mockAddToCart} product={product} />);

  const addToCart = screen.getByRole("button", { name: /Add to cart/i });

  userEvent.click(addToCart);

  // Check if function was called with product and quantity (by default quantity is 1)
  expect(mockAddToCart).toHaveBeenCalledWith(
    expect.objectContaining(product),
    1
  );
});

describe("quantity", () => {
  it("should let a user manually type in quantity", () => {
    render(<ProductPage product={product} />);

    const input = screen.getByRole("spinbutton");

    expect(input).toHaveValue(1);
    userEvent.type(input, "0");
    expect(input).toHaveValue(10);
  });

  it("should increment and decrement by 1", () => {
    render(<ProductPage product={product} />);
    const increment = screen.getByRole("button", { name: "increment" });
    const decrement = screen.getByRole("button", { name: "decrement" });
    const input = screen.getByRole("spinbutton");

    expect(input).toHaveValue(1);
    userEvent.click(increment);
    expect(input).toHaveValue(2);
    userEvent.click(decrement);
    expect(input).toHaveValue(1);
  });

  it("should not allow decrement to go below 1", () => {
    render(<ProductPage product={product} />);
    const decrement = screen.getByRole("button", { name: "decrement" });
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveValue(1);

    userEvent.click(decrement);

    expect(input).toHaveValue(1);
  });

  it("should not add to cart if quantity below 1", () => {
    const mockAddToCart = jest.fn();

    render(<ProductPage onAddToCart={mockAddToCart} product={product} />);
    const input = screen.getByRole("spinbutton");
    const addToCart = screen.getByRole("button", { name: /Add to cart/i });

    userEvent.type(input, "{backspace}0");
    expect(input).toHaveValue(0);
    expect(addToCart).toHaveAttribute("disabled");

    userEvent.click(addToCart);
    expect(mockAddToCart).not.toHaveBeenCalled();
  });
});

it("should not add to cart if number has decimal", () => {
  const mockAddToCart = jest.fn();

  render(<ProductPage onAddToCart={mockAddToCart} product={product} />);
  const input = screen.getByRole("spinbutton");
  const addToCart = screen.getByRole("button", { name: /Add to cart/i });

  userEvent.type(input, "{backspace}1.5");
  expect(input).toHaveValue(1.5);
  expect(addToCart).toHaveAttribute("disabled");

  userEvent.click(addToCart);
  expect(mockAddToCart).not.toHaveBeenCalled();
});
