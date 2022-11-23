import { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Shop from "./components/Shop";
import uniqid from "uniqid";
import Cart from "./components/Cart";
import "@fortawesome/fontawesome-free/css/all.min.css";
import productsData from "./products.json";
import RouteSwitch from "./RouteSwitch";
import ProductPage from "./components/ProductPage";
import loadImage from "./helpers/loadImage";
import Searchbar from "./components/Searchbar";

const App = () => {
  // Copy products to not modify directly
  const allProducts = JSON.parse(JSON.stringify(productsData));

  allProducts.forEach((product) => {
    product.image = loadImage(product.image);
  });

  // Will implement search products on this later
  const [products, setProducts] = useState(allProducts);
  const [searchbarIsOpen, setSearchbarIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [canShake, setCanShake] = useState(false);

  // Increments product quantity
  function addToCart(product, quantity) {
    const newCart = JSON.parse(JSON.stringify(cart));
    const productIndex = newCart.findIndex((item) => item.id === product.id);
    // If product has not been added to cart before
    if (productIndex === -1) newCart.push({ ...product, quantity });
    else newCart[productIndex].quantity += quantity;

    setCart(newCart);

    // Indicate added to cart by shaking cart
    cartShake(900);
  }

  function cartShake(ms) {
    setCanShake(true);
    setTimeout(() => setCanShake(false), ms);
  }

  function deleteFromCart(productId) {
    setCart(cart.filter((product) => product.id !== productId));
  }

  function changeCartItemQuantity(productId, newQuantity) {
    setCart(
      cart.map((item) => {
        if (item.id === productId) item.quantity = newQuantity;
        return item;
      })
    );
  }

  function onCartChange(productId, newQuantity) {
    // if new quantity is not a whole number
    if (newQuantity % 1) return;

    if (newQuantity <= 0) {
      deleteFromCart(productId);
      return;
    }

    changeCartItemQuantity(productId, newQuantity);
  }

  function decrementCartItem(product) {
    if (product.quantity === 1) {
      deleteFromCart(product.id);
      return;
    }

    changeCartItemQuantity(product.id, product.quantity - 1);
  }

  const incrementCartItem = (product) =>
    changeCartItemQuantity(product.id, product.quantity + 1);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const shuffled = shuffle([...allProducts]);

  return (
    <>
      {searchbarIsOpen && <Searchbar />}
      <RouteSwitch
        Header={() => (
          <Header
            cartAmount={
              cart.length &&
              cart.reduce((accumulator, curr) => {
                return accumulator + curr.quantity;
              }, 0)
            }
            canShake={canShake}
          />
        )}
        pages={[
          {
            element: (
              <Home
                // max shuffled items is 4
                featured={shuffled.length > 4 ? shuffled.slice(0, 4) : shuffled}
              />
            ),
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
                subtotal={
                  // Make sure cart is not empty before reducing
                  cart.length &&
                  (+cart
                    .reduce(
                      (accumulator, curr) =>
                        accumulator + curr.price * curr.quantity,
                      0
                    )
                    .toFixed(2)).toLocaleString()
                }
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
    </>
  );
};

export default App;
