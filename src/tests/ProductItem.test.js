import ProductItem from "../components/ProductItem";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  Link: (props) => {
    return (
      <>
        <div data-testid="to">{props.to}</div>
        <div>{props.children}</div>
      </>
    );
  },
}));

it("should render a shop item", () => {
  const product = {
    name: "item name",
    price: "5.52",
    prefix: "$",
    image: "fakeimg.png",
    path: "/products/test-name",
  };

  render(<ProductItem product={product} />);

  expect(screen.getByText("item name")).toBeInTheDocument();
  expect(screen.getByText("$5.52")).toBeInTheDocument();

  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("alt", "item name");
  expect(image).toHaveAttribute("src", "fakeimg.png");

  expect(screen.getByTestId("to").textContent).toBe("/products/test-name");
});
