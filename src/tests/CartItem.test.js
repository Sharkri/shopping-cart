import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "../components/CartItem";
import userEvent from "@testing-library/user-event";

const item = {
  name: "item name",
  path: "/item/path",
  price: "$44.24",
  image: "./testy.png",
  quantity: 1,
  id: 4,
};

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

it("should show product name, price, image", () => {
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

it("calls onChange with correct argument(s) on each input", () => {
  const onChangeMock = jest.fn();
  render(<CartItem item={item} onChange={onChangeMock} />);
  const input = screen.getByRole("spinbutton");
  expect(input).toHaveValue(1);
  userEvent.type(input, "5");
  expect(onChangeMock).toHaveBeenCalledWith(4, 15);
});

it("calls onDecrement with correct argument", () => {
  const onDecrementMock = jest.fn();
  render(<CartItem item={item} onDecrement={onDecrementMock} />);
  const decrement = screen.getByRole("button", { name: "decrement" });
  userEvent.click(decrement);

  expect(onDecrementMock).toHaveBeenCalledWith(item);
});

it("calls onIncrement with correct argument", () => {
  const onIncrementMock = jest.fn();
  render(<CartItem item={item} onIncrement={onIncrementMock} />);
  const increment = screen.getByRole("button", { name: "increment" });
  userEvent.click(increment);

  expect(onIncrementMock).toHaveBeenCalledWith(item);
});

it("calls onRemove with correct argument (the item's id)", () => {
  const onRemoveMock = jest.fn();
  render(<CartItem item={item} onRemove={onRemoveMock} />);
  const remove = screen.getByRole("button", { name: /Remove item/i });
  userEvent.click(remove);

  expect(onRemoveMock).toHaveBeenCalledWith(item.id);
});
