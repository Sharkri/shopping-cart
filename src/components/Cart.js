import CartItem from "./CartItem";

function Cart({ cart, onChange, onDecrement }) {
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
        />
      ))}
    </div>
  );
}

export default Cart;
