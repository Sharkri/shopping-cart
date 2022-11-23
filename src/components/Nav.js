import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav({ cartAmount, canShake, onSearchbarOpen }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
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

      <button aria-label="open searchbar" onClick={onSearchbarOpen}>
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </nav>
  );
}

export default Nav;
