import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductPage.css";
import Quantity from "./Quantity";

export default function ProductPage({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const onInputChange = (value) => {
    if (value <= 99) setQuantity(value === "" ? value : +value);
    else setQuantity(99);
  };
  const increment = () =>
    setQuantity((quantity) => {
      if (quantity < 99) return quantity + 1;
      return quantity;
    });
  const decrement = () =>
    setQuantity((quantity) => {
      // Don't allow quantity to go below 1
      if (quantity > 1) return quantity - 1;

      return quantity;
    });

  return (
    <div className="product-page-container">
      <div className="product-page">
        <img
          src={product.image}
          alt={product.name}
          className="product-page-image"
        />

        <div className="product-info">
          <div className="product-top">
            <div className="main-product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
            </div>

            <p>{product.description || "No description provided."}</p>
          </div>

          <hr />

          <div className="product-bottom">
            <form className="product-cart" onSubmit={(e) => e.preventDefault()}>
              <Quantity
                onIncrement={increment}
                onDecrement={decrement}
                onChange={onInputChange}
                quantity={quantity}
              />
              <button
                onClick={() => onAddToCart(product, quantity)}
                disabled={quantity < 1 || quantity % 1 !== 0}
                className="add-to-cart"
              >
                Add to cart
              </button>

              <Link to="/shop" className="go-back">
                Go back
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
