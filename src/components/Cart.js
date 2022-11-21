import CartItem from "./CartItem";

function Cart({ cart, onChange, onDecrement, onIncrement }) {
  if (!cart?.length)
    return (
      <div className="cart">
        <p>Your cart is empty</p>
      </div>
    );

  return (
    <div className="cart">
      {cart.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          onChange={onChange}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      ))}
    </div>
  );
}

export default Cart;
