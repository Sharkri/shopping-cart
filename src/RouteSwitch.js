import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Shop from "./components/Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
