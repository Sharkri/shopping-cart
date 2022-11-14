import ShopItem from "./ShopItem";

function Shop({ products }) {
  console.log(products);
  if (products == null || !products.length) {
    return (
      <div className="shop">
        <h1>No products found</h1>
      </div>
    );
  }
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
