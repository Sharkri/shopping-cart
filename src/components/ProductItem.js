import "../styles/ProductItem.css";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <Link className="shop-item" to={product.path}>
      <p>{product.name}</p>
      <p>{`${product.prefix}${product.price}`}</p>
      <img src={product.image} alt={product.name} className="product-image" />
    </Link>
  );
}
