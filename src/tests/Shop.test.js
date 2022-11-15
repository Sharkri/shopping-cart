import Shop from "../components/Shop";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
jest.mock("../components/ShopItem", () => (product) => (
  <>
    <div data-testid="name">{product.name}</div>
    <div data-testid="price">{product.price}</div>
    <div data-testid="image">{product.image}</div>
    <div data-testid="description">{product.description}</div>
  </>
));

let items = [
  {
    name: "product name",
    price: "5.99",
    image: "nonexistentImg.jpg",
    description: "product description",
    id: 1,
  },
  {
    name: "some other item",
    price: "2.49",
    image: "idk.png",
    description: "product2 description",
    id: 2,
  },
];

describe("shop", () => {
  it("should render multiple shop items", () => {
    render(<Shop products={items} />);

    const names = screen.getAllByTestId("name");
    const prices = screen.getAllByTestId("price");
    const images = screen.getAllByTestId("image");
    const description = screen.getAllByTestId("description");

    expect(names[0].textContent).toMatch(/product name/i);
    expect(prices[0].textContent).toBe("5.99");
    expect(images[0].textContent).toBe("nonexistentImg.jpg");
    expect(description[0].textContent).toBe("product description");

    expect(names[1].textContent).toMatch(/some other item/i);
    expect(prices[1].textContent).toBe("2.49");
    expect(images[1].textContent).toBe("idk.png");
    expect(description[1].textContent).toBe("product2 description");
  });

  it("should display text when no products", () => {
    render(<Shop products={[]} />);
    expect(screen.getByText(/No products found/i)).toBeInTheDocument();
  });
});
