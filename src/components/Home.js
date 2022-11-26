import { Link } from "react-router-dom";
import "../styles/Home.css";
import homepageExtraLarge from "../images/homepage-extra-large.jpg";
import homepageLarge from "../images/homepage-large.jpg";
import homepageMedium from "../images/homepage-medium.jpg";
import homepageSmall from "../images/homepage-small.jpg";
import ProductItem from "./ProductItem";

function Home({ featured = [] }) {
  return (
    <div className="home">
      <section className="top-section">
        <img
          src={homepageLarge}
          srcSet={`${homepageExtraLarge} 6912w, ${homepageLarge} 2400w, ${homepageMedium} 1400w, ${homepageSmall} 480w`}
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
        <div className="featured-items-container">
          <h1 className="featured-items-heading">Featured Items</h1>
          <ul className="featured-items">
            {featured.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
