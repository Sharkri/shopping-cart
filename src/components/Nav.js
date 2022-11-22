import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav({ cartAmount }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart" className="cart-link">
        <i className="fa-solid fa-cart-shopping" />
        {cartAmount ? (
          <span className="amount-in-cart">
            {cartAmount > 99 ? "99+" : cartAmount}
          </span>
        ) : null}
      </Link>
    </nav>
  );
}

export default Nav;
