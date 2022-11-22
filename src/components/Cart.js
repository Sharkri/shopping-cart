import { Link } from "react-router-dom";
import "../styles/Cart.css";
import CartItem from "./CartItem";

function Cart({
  cart,
  onChange,
  onDecrement,
  onIncrement,
  onRemove,
  subtotal,
}) {
  return (
    <div className="cart">
      <h2 className="cart-header">Your cart</h2>

      <div className="cart-content">
        {!cart?.length ? (
          <div className="empty-cart">
            <p className="empty-cart-text">
              There are currently no items in your cart.
            </p>
            <Link to="/shop" className="continue-shopping">
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                onChange={onChange}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
                onRemove={onRemove}
              />
            ))}

            <p className="subtotal">
              Subtotal: <span className="subtotal-amount">${subtotal}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
