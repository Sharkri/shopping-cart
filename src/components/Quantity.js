import "../styles/Quantity.css";

export default function Quantity({
  quantity,
  onIncrement,
  onDecrement,
  onChange,
}) {
  const onInputChange = (e) => onChange(e.target.value);

  return (
    <div className="quantity-counter">
      <button
        className="decrement"
        onClick={onDecrement}
        aria-label="decrement"
        type="button"
        data-quantity={quantity}
      >
        <i className="fa-solid fa-minus" />
      </button>

      <input
        name="quantity-input"
        className="quantity-input"
        value={quantity}
        type="number"
        min="1"
        onChange={onInputChange}
        autoComplete="off"
      />

      <button
        className="increment"
        aria-label="increment"
        onClick={onIncrement}
        type="button"
        data-quantity={quantity}
      >
        <i className="fa-solid fa-plus" />
      </button>
    </div>
  );
}
