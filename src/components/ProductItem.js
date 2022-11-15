import "../styles/ProductItem.css";

export default function ProductItem({ name, price, image }) {
  return (
    <div className="shop-item">
      <p>{name}</p>
      <p>{price}</p>
      <img src={image} alt={name} className="product-image" />
    </div>
  );
}
