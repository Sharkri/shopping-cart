import { Link } from "react-router-dom";
import "../styles/Cart.css";
import CartItem from "./CartItem";

function Cart({ cart, onChange, onDecrement, onIncrement }) {
  return (
    <div className="cart">
      <h1>Your cart</h1>

      {!cart?.length ? (
        <>
          <p>Your cart is empty</p>
          <Link to="/shop">Continue shopping</Link>
        </>
      ) : (
        // Map through each item in cart array and display it
        cart.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            onChange={onChange}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        ))
      )}
    </div>
  );
}

export default Cart;
