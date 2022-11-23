import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductPage.css";
import Quantity from "./Quantity";

export default function ProductPage({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const onInputChange = (value) => setQuantity(value === "" ? value : +value);
  const increment = () => setQuantity((quantity) => quantity + 1);
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
              <p className="product-price">{`${product.prefix}${product.price}`}</p>
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

              <button onClick={() => navigate(-1)} className="go-back">
                Go back
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
