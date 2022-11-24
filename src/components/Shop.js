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
        <NoProductsFound query={query} />
      </div>
    );
  }

  return (
    <div className="shop">
      {query && (
        <div className="search-results-info">
          <h2 className="search-results-text">Search Results</h2>
          <p className="results-for-text">
            {filteredProducts.length}{" "}
            {filteredProducts.length > 1 ? "Results" : "Result"} For "{query}"
          </p>
        </div>
      )}
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
