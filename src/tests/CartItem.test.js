import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "../components/CartItem";

const item = {
  name: "item name",
  path: "/item/path",
  price: "$44.24",
  image: "./testy.png",
};

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

it("should should show product name, price, image", () => {
  render(<CartItem item={item} />);

  expect(screen.getByText("item name")).toBeInTheDocument();
  expect(screen.getByText("$44.24")).toBeInTheDocument();
  const img = screen.getByRole("img");

  expect(img).toHaveAttribute("alt", "item name");
  expect(img).toHaveAttribute("src", "./testy.png");
});

it("should link to product page on click of product name or image", () => {
  render(<CartItem item={item} />);
  const links = screen.getAllByRole("link", { name: "item name" });
  // Link 0 is name and 1 is image
  expect(links[0]).toHaveAttribute("href", "/item/path");
  expect(links[1]).toHaveAttribute("href", "/item/path");
});
