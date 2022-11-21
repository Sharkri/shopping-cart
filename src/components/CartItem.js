import { Link } from "react-router-dom";
import Quantity from "./Quantity";

function CartItem({ item, onChange }) {
  return (
    <div className="cart-item">
      <Link to={item.path}>{item.name}</Link>
      <p>{item.price}</p>
      <Link to={item.path}>
        <img src={item.image} alt={`${item.name}`} />
      </Link>

      <Quantity
        quantity={item.quantity}
        onChange={(value) => onChange(item.id, +value)}
      />
    </div>
  );
}

export default CartItem;
