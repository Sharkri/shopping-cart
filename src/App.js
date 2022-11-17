import { useState } from "react";
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
  let allProducts = JSON.parse(JSON.stringify(productsJson));

  // Require images to load properly
  allProducts.forEach((product) => {
    product.id = uniqid();

    try {
      product.image = require(`${product.image}`);
    } catch (error) {
      console.error(error);
    }
  });

  // Will implement search products on this later
  const [products, setProducts] = useState(allProducts);

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
          element: <Cart />,
          path: "/cart",
          id: uniqid(),
        },

        // Create route for all products
        ...allProducts.map((product) => ({
          element: <ProductPage product={product} key={product.id} />,
          path: `/shop/${product.path}`,
          id: product.id,
        })),
      ]}
    />
  );
};

export default App;
