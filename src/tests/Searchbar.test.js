import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Searchbar from "../components/Searchbar";

const onChangeMock = jest.fn();
const onCloseMock = jest.fn();

it("should onChange, call the passed in function with its input value", () => {
  render(<Searchbar onChange={onChangeMock} />);

  const searchInput = screen.getByRole("searchbox");

  userEvent.type(searchInput, "Sofa");

  expect(onChangeMock).toHaveBeenNthCalledWith(1, "S");
  expect(onChangeMock).toHaveBeenNthCalledWith(2, "So");
  expect(onChangeMock).toHaveBeenNthCalledWith(3, "Sof");
  expect(onChangeMock).toHaveBeenNthCalledWith(4, "Sofa");
});

it("should onClose, called onClose function passed in", () => {
  render(<Searchbar onClose={onCloseMock} />);

  const onCloseButton = screen.getByRole("button", { name: "close" });

  userEvent.click(onCloseButton);
  expect(onCloseMock).toHaveBeenCalledTimes(1);
});

it("should set inputs value to the one passed in", () => {
  render(<Searchbar query="Couch" />);
  const input = screen.getByRole("searchbox");

  expect(input).toHaveValue("Couch");
});
