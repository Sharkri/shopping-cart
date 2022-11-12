import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Shop from "./components/Shop";
import uniqid from "uniqid";
import Cart from "./components/Cart";

const RouteSwitch = () => {
  const links = [
    { name: "Home", to: "/", id: uniqid() },
    { name: "Shop", to: "/shop", id: uniqid() },
    { name: "Cart", to: "/cart", id: uniqid() },
  ];

  return (
    <BrowserRouter>
      <Header links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
