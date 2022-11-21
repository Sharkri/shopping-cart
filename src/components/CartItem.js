import { Link } from "react-router-dom";
import Quantity from "./Quantity";
import "../styles/CartItem.css";

function CartItem({ item, onChange, onDecrement, onIncrement, onRemove }) {
  return (
    <div className="cart-item">
      <Link to={item.path} className="cart-item-left-section">
        <img
          src={item.image}
          alt={`${item.name}`}
          className="cart-item-image"
        />
      </Link>

      <div className="cart-item-right-section">
        <div className="cart-item-main-info">
          <Link to={item.path} className="cart-item-name">
            {item.name}
          </Link>
          <p className="cart-item-price">{`${item.prefix}${item.price}`}</p>
        </div>
        <Quantity
          quantity={item.quantity}
          onChange={(value) => onChange(item.id, +value)}
          onDecrement={() => onDecrement(item)}
          onIncrement={() => onIncrement(item)}
        />
        <button onClick={() => onRemove(item.id)} className="cart-item-remove">
          Remove item
        </button>
      </div>
    </div>
  );
}

export default CartItem;
