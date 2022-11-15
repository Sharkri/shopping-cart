import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Shop from "./components/Shop";
import uniqid from "uniqid";
import Cart from "./components/Cart";
import "@fortawesome/fontawesome-free/css/all.min.css";
import productsJSON from "./products.json";

const RouteSwitch = () => {
  const [products, setProducts] = useState(
    productsJSON.map((product) => {
      const image = require(`${product.image.toLowerCase()}`);
      return { ...product, image };
    })
  );

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
