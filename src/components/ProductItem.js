import "../styles/ProductItem.css";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <Link className="shop-item" to={product.path}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="shop-item-info">
        <p className="shop-item-product-name">{product.name}</p>
        <p className="shop-item-product-price">{`${product.prefix}${product.price}`}</p>
      </div>
    </Link>
  );
}
