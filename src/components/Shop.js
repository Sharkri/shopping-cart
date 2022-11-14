import products from "../products.json";
import ShopItem from "./ShopItem";

function Shop() {
  return (
    <div className="shop">
      {products.map((product) => {
        return (
          <ShopItem
            name={product.name}
            price={product.price}
            image={product.image}
            key={product.id}
          />
        );
      })}
    </div>
  );
}

export default Shop;
