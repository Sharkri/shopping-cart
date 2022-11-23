import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import Searchbar from "./Searchbar";

function Nav({ cartAmount, canShake }) {
  const [searchbarIsOpen, setSearchbarIsOpen] = useState(false);

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
        {cartAmount ? (
          <span className="amount-in-cart">
            {cartAmount > 99 ? "99+" : cartAmount}
          </span>
        ) : null}
      </Link>

      <button
        aria-label="open searchbar"
        onClick={() => setSearchbarIsOpen(true)}
      >
        <i className="fa-solid fa-magnifying-glass" />
      </button>
      {searchbarIsOpen && <Searchbar />}
    </nav>
  );
}

export default Nav;
