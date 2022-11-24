import "../styles/NoProductsFound.css";
import { Link } from "react-router-dom";

function NoProductsFound({ query }) {
  return (
    <div className="no-products-found">
      <h1>No products found for "{query}"</h1>
      <p>Please check your spelling or use different keywords.</p>
      <Link to="/shop" className="return-to-shop">
        Return to shop
      </Link>
    </div>
  );
}

export default NoProductsFound;
