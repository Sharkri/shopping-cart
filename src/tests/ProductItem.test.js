import ProductItem from "../components/ProductItem";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render a shop item", () => {
  render(<ProductItem name="item name" price="$5.52" image="fakeimg.png" />);

  expect(screen.getByText("item name")).toBeInTheDocument();
  expect(screen.getByText("$5.52")).toBeInTheDocument();

  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("alt", "item name");
  expect(image).toHaveAttribute("src", "fakeimg.png");
});
