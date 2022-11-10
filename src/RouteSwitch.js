import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Shop from "./components/Shop";

const RouteSwitch = () => {
  const links = [
    { to: "/", name: "Home" },
    { to: "/shop", name: "Shop" },
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
