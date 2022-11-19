export default function Quantity({
  quantity,
  onIncrement,
  onDecrement,
  onChange,
}) {
  const onInputChange = (e) => onChange(e.target.value);

  return (
    <div className="quantity-count">
      <button className="decrement" onClick={onDecrement} type="button">
        -
      </button>

      <input
        name="quantity-input"
        value={quantity}
        type="number"
        min="1"
        onChange={onInputChange}
      />

      <button className="increment" onClick={onIncrement} type="button">
        +
      </button>
    </div>
  );
}
