import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Shop from "./components/Shop";
import uniqid from "uniqid";
import Cart from "./components/Cart";
import "@fortawesome/fontawesome-free/css/all.min.css";
import productsJson from "./products.json";
import RouteSwitch from "./RouteSwitch";

const App = () => {
  // Copy JSON to not modify directly
  let productsCopy = JSON.parse(JSON.stringify(productsJson));

  // Require images to load properly
  productsCopy.forEach((product) => {
    try {
      product.image = require(`${product.image}`);
    } catch (error) {}
  });

  const [products, setProducts] = useState(productsCopy);

  return (
    <RouteSwitch
      Header={() => <Header />}
      pages={[
        {
          element: () => <Home />,
          path: "/",
          id: uniqid(),
        },

        {
          element: () => <Shop products={products} />,
          path: "/shop",
          id: uniqid(),
        },

        {
          element: () => <Cart />,
          path: "/cart",
          id: uniqid(),
        },
      ]}
    />
  );
};

export default App;
