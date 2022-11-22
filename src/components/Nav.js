import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav({ cartAmount }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart" className="cart-link">
        <i className="fa-solid fa-cart-shopping" />
        <span className="amount-in-cart">{cartAmount}</span>
      </Link>
    </nav>
  );
}

export default Nav;
