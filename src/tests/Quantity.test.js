import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Quantity from "../components/Quantity";

const onIncrement = jest.fn();
const onDecrement = jest.fn();
const onChangeMock = jest.fn();

it("should call increment and decrement", () => {
  render(
    <Quantity
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onChange={onChangeMock}
    />
  );

  expect(onDecrement).toHaveBeenCalledTimes(0);
  const decrement = screen.getByRole("button", { name: "-" });
  userEvent.click(decrement);
  expect(onDecrement).toHaveBeenCalledTimes(1);

  expect(onIncrement).toHaveBeenCalledTimes(0);
  const increment = screen.getByRole("button", { name: "+" });
  userEvent.click(increment);
  expect(onIncrement).toHaveBeenCalledTimes(1);
});

it("should call onChange with correct argument(s) on each input", () => {
  render(
    <Quantity
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onChange={onChangeMock}
    />
  );

  const input = screen.getByRole("spinbutton");

  userEvent.type(input, "70");

  expect(onChangeMock).toHaveBeenNthCalledWith(1, "7");
  expect(onChangeMock).toHaveBeenNthCalledWith(2, "70");
});

it("should use quantity passed in as value", () => {
  let mockQuantity = 5;
  render(
    <Quantity
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onChange={onChangeMock}
      quantity={mockQuantity}
    />
  );

  const input = screen.getByRole("spinbutton");
  expect(input).toHaveValue(5);
});
