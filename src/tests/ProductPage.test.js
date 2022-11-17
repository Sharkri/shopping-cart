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
  price: "$69.99",
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

it("should call function on add to cart click", () => {
  const mockAddToCart = jest.fn();
  render(<ProductPage onAddToCart={mockAddToCart} product={product} />);

  const addToCart = screen.getByRole("button", { name: /Add to cart/i });

  userEvent.click(addToCart);

  // Check if function was called with product
  expect(mockAddToCart).toHaveBeenCalledWith(expect.objectContaining(product));
});

it("should be able to navigate back to shop", () => {
  render(<ProductPage product={product} />);

  expect(screen.getByRole("link", { name: /Go back/i })).toHaveAttribute(
    "href",
    "/shop"
  );
});
