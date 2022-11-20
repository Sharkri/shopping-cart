import CartItem from "./CartItem";

function Cart({ cart }) {
  if (!cart?.length)
    return (
      <div className="cart">
        <p>Your cart is empty</p>
      </div>
    );

  return (
    <div className="cart">
      {cart.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
}

export default Cart;
