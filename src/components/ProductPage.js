import { Link } from "react-router-dom";

export default function ProductPage({ product, onAddToCart }) {
  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
      <img src={product.image} alt={product.name} />
      <Link to="/shop">Go back</Link>
    </div>
  );
}
