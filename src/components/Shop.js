import ProductItem from "./ProductItem";
import "../styles/Shop.css";
import NoProductsFound from "./NoProductsFound";
import { useSearchParams } from "react-router-dom";

function Shop({ products }) {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("q"));

  if (products == null || !products.length) {
    return (
      <div className="shop">
        <NoProductsFound />
      </div>
    );
  }
  return (
    <div className="shop">
      <div className="products">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
