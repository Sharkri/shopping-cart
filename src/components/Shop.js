import ProductItem from "./ProductItem";
import "../styles/Shop.css";
import NoProductsFound from "./NoProductsFound";
import { useSearchParams } from "react-router-dom";

function Shop({ products }) {
  function isMatchingQuery({ name }) {
    return name.toLowerCase().includes(query.toLowerCase());
  }

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const filteredProducts = query ? products.filter(isMatchingQuery) : products;

  if (!filteredProducts.length) {
    return (
      <div className="shop">
        <NoProductsFound />
      </div>
    );
  }

  return (
    <div className="shop">
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
