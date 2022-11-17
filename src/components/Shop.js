import ProductItem from "./ProductItem";
import "../styles/Shop.css";

function Shop({ products }) {
  if (products == null || !products.length) {
    return (
      <div className="shop">
        <h1>No products found</h1>
      </div>
    );
  }
  return (
    <div className="shop">
      <div className="products">
        {products.map((product) => (
          <ProductItem
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            path={product.path}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
