import Shop from "../components/Shop";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
jest.mock("../components/ProductItem", () => ({ product }) => (
  <>
    <div data-testid="name">{product.name}</div>

    <div data-testid="price">
      {product.prefix}
      {product.price}
    </div>
    <div data-testid="image">{product.image}</div>
    <div data-testid="description">{product.description}</div>
    <div data-testid="path">{product.path}</div>
  </>
));

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

let items = [
  {
    name: "product name",
    price: "5.99",
    prefix: "gbp",
    image: "nonexistentImg.jpg",
    description: "product description",
    id: 1,
    path: "/products/testpath",
  },
  {
    name: "some other item",
    price: "2.49",
    prefix: "$",
    image: "idk.png",
    description: "product2 description",
    id: 2,
    path: "/test/yes",
  },
];

describe("shop", () => {
  it("should render multiple products", () => {
    render(<Shop products={items} />);

    const names = screen.getAllByTestId("name");
    const prices = screen.getAllByTestId("price");
    const images = screen.getAllByTestId("image");
    const descriptions = screen.getAllByTestId("description");
    const paths = screen.getAllByTestId("path");

    expect(names[0].textContent).toMatch(/product name/i);
    expect(prices[0].textContent).toBe("gbp5.99");
    expect(images[0].textContent).toBe("nonexistentImg.jpg");
    expect(descriptions[0].textContent).toBe("product description");
    expect(paths[0].textContent).toBe("/products/testpath");

    expect(names[1].textContent).toMatch(/some other item/i);
    expect(prices[1].textContent).toBe("$2.49");
    expect(images[1].textContent).toBe("idk.png");
    expect(descriptions[1].textContent).toBe("product2 description");
    expect(paths[1].textContent).toBe("/test/yes");
  });

  it("renders no products found when given an empty array of products", () => {
    render(<Shop products={[]} />);

    expect(screen.getByText(/No products found/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Please check your spelling or use different keywords./i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Return to shop/i })
    ).toHaveAttribute("href", "/shop");
  });
});
