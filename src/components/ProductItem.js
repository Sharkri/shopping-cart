import "../styles/ProductItem.css";
import { Link } from "react-router-dom";

export default function ProductItem({ name, price, image, path }) {
  return (
    <Link className="shop-item" to={path}>
      <p>{name}</p>
      <p>{price}</p>
      <img src={image} alt={name} className="product-image" />
    </Link>
  );
}
