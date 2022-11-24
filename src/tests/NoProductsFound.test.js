import { render, screen } from "@testing-library/react";
import NoProductsFound from "../components/NoProductsFound";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

it("should display no products found with query", () => {
  render(
    <MemoryRouter>
      <NoProductsFound query="foobar" />
    </MemoryRouter>
  );

  expect(
    screen.getByText('No products found for "foobar"')
  ).toBeInTheDocument();

  expect(
    screen.getByText(/Please check your spelling or use different keywords./i)
  ).toBeInTheDocument();

  expect(screen.getByRole("link", { name: /Return to shop/i })).toHaveAttribute(
    "href",
    "/shop"
  );
});
