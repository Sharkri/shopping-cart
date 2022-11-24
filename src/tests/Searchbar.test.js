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

it("should automatically be focused on load", () => {
  render(<Searchbar />);
  expect(screen.getByRole("searchbox")).toHaveFocus();
});

it("should be required", () => {
  render(<Searchbar />);
  expect(screen.getByRole("searchbox")).toHaveAttribute("required");
});

it("should call onSubmit with correct params when user click query search", () => {
  const onSubmitMock = jest.fn();
  render(<Searchbar query="Bed" onSubmit={onSubmitMock} />);

  const submitSearch = screen.getByRole("button", { name: "submit search" });
  userEvent.click(submitSearch);
  expect(onSubmitMock).toHaveBeenCalledWith("Bed");
});
it("should call onSubmit with correct params on enter", () => {
  const onSubmitMock = jest.fn();
  render(<Searchbar query="cat" onSubmit={onSubmitMock} />);

  userEvent.type(screen.getByRole("searchbox"), "{enter}");
  expect(onSubmitMock).toHaveBeenCalledWith("cat");
});
