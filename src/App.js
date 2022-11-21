import { useEffect, useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Shop from "./components/Shop";
import uniqid from "uniqid";
import Cart from "./components/Cart";
import "@fortawesome/fontawesome-free/css/all.min.css";
import productsJson from "./products.json";
import RouteSwitch from "./RouteSwitch";
import ProductPage from "./components/ProductPage";

const App = () => {
  // Copy JSON to not modify directly
  const allProducts = JSON.parse(JSON.stringify(productsJson));

  // Will implement search products on this later
  const [products, setProducts] = useState(allProducts);
  const [cart, setCart] = useState([]);

  // Increments product quantity
  function addToCart(product, quantity) {
    const newCart = JSON.parse(JSON.stringify(cart));
    const productIndex = newCart.findIndex((item) => item.id === product.id);
    // If product has not been added to cart before
    if (productIndex === -1) newCart.push({ ...product, quantity });
    else newCart[productIndex].quantity += quantity;

    setCart(newCart);
  }

  function deleteFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }

  function onCartChange(productId, newQuantity) {
    if (newQuantity <= 0) {
      deleteFromCart(productId);
      return;
    }

    setCart(
      cart.map((item) => {
        if (item.id === productId) item.quantity = newQuantity;
        return item;
      })
    );
  }

  function decrementCartItem(product) {
    if (product.quantity === 1) {
      deleteFromCart(product.id);
      return;
    }

    setCart(
      cart.map((item) => {
        if (item.id === product.id) item.quantity -= 1;
        return item;
      })
    );
  }

  function incrementCartItem(product) {
    setCart(
      cart.map((item) => {
        if (item.id === product.id) item.quantity += 1;
        return item;
      })
    );
  }

  return (
    <RouteSwitch
      Header={() => <Header />}
      pages={[
        {
          element: <Home />,
          path: "/",
          id: uniqid(),
        },

        {
          element: <Shop products={products} />,
          path: "/shop",
          id: uniqid(),
        },

        {
          element: (
            <Cart
              cart={cart}
              onChange={onCartChange}
              onDecrement={decrementCartItem}
              onIncrement={incrementCartItem}
              onRemove={deleteFromCart}
              subtotal={cart.reduce(
                (prev, curr) =>
                  prev.price * prev.quantity + curr.price * curr.quantity,
                { price: 0, quantity: 0 }
              )}
            />
          ),
          path: "/cart",
          id: uniqid(),
        },

        // Create route for all products
        ...allProducts.map((product) => ({
          element: (
            <ProductPage
              product={product}
              onAddToCart={addToCart}
              key={product.id}
            />
          ),

          path: product.path,
          id: uniqid(),
        })),
      ]}
    />
  );
};

export default App;
