import Shop from "../components/Shop";
import { render, screen } from "@testing-library/react";

jest.mock("../components/ShopItem", () => (product) => (
  <>
    <div data-testid="name">{product.name}</div>
    <div data-testid="price">{product.price}</div>
    <div data-testid="image">{product.image}</div>
  </>
));

jest.mock("../products.json", () => {
  const items = [
    { name: "product name", price: "5.99", image: "nonexistentImg.jpg", id: 1 },
    { name: "some other item", price: "2.49", image: "idk.png", id: 2 },
  ];
  return items;
});

describe("shop", () => {
  it("should render multiple shop items", () => {
    render(<Shop />);

    const names = screen.getAllByTestId("name");
    const prices = screen.getAllByTestId("price");
    const images = screen.getAllByTestId("image");

    expect(names[0].textContent).toMatch(/product name/i);
    expect(prices[0].textContent).toBe("5.99");
    expect(images[0].textContent).toBe("nonexistentImg.jpg");

    expect(names[1].textContent).toMatch(/some other item/i);
    expect(prices[1].textContent).toBe("2.49");
    expect(images[1].textContent).toBe("idk.png");
  });
});
