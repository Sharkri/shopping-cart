import { Link } from "react-router-dom";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <Link to={item.path}>{item.name}</Link>
      <p>{item.price}</p>
      <Link to={item.path}>
        <img src={item.image} alt={`${item.name}`} />
      </Link>
    </div>
  );
}

export default CartItem;
