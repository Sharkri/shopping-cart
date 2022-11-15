import "../styles/ShopItem.css";

export default function ShopItem({ name, price, image }) {
  return (
    <div className="shop-item">
      <p>{name}</p>
      <p>{price}</p>
      <img src={image} alt={name} />
    </div>
  );
}
