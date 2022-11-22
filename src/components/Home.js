import { Link } from "react-router-dom";
import "../styles/Home.css";
import homepage from "../images/homepage.jpg";
import ProductItem from "./ProductItem";

function Home({ featured = [] }) {
  return (
    <div className="home">
      <section className="top-section">
        <img
          src={homepage}
          alt="living room with furniture"
          className="homepage-img"
        />
        <div className="image-text-overlay">
          <h1 className="image-text">Make room for better living</h1>
          <Link to="/shop" className="shop-now">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="bottom-section">
        <h1 className="bottom-section-heading">Featured Items</h1>
        <ul className="featured-items">
          {featured.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
