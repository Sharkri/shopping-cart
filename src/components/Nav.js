import { Link } from "react-router-dom";
import "../styles/Nav.css";
import OpenSearchbar from "./OpenSearcbar";

function Nav({ cartAmount, canShake, onSearchbarOpen }) {
  return (
    <nav>
      <Link to="/shop">Shop</Link>
      <OpenSearchbar onSearchbarOpen={onSearchbarOpen} />
      <Link
        to="/cart"
        className={`cart-link ${canShake ? "shake" : ""}`}
        aria-label="cart link"
      >
        <i className="fa-solid fa-cart-shopping" />
        {
          // Only show cart amount if it exists
          cartAmount ? (
            <span className="amount-in-cart">
              {
                // If cart amount is greater than 99, show 99+
                cartAmount > 99 ? "99+" : cartAmount
              }
            </span>
          ) : null
        }
      </Link>
    </nav>
  );
}

export default Nav;
