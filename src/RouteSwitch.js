import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import uniqid from "uniqid";

const RouteSwitch = () => {
  const links = [
    { to: "/", name: "Home", id: uniqid() },
    { to: "/shop", name: "Shop", id: uniqid() },
  ];

  return (
    <BrowserRouter>
      <Nav links={links} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
