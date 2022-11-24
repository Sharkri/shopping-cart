import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OpenSearchbar from "../components/OpenSearcbar";

it("should call onOpenSearchbar", () => {
  const mockOnSearchbarOpen = jest.fn();

  render(<OpenSearchbar onSearchbarOpen={mockOnSearchbarOpen} />);

  const openSearchbar = screen.getByRole("button", {
    name: "open searchbar",
  });

  expect(mockOnSearchbarOpen).not.toHaveBeenCalled();

  userEvent.click(openSearchbar);

  expect(mockOnSearchbarOpen).toHaveBeenCalledTimes(1);
});
