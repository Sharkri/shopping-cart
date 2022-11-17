import { Link } from "react-router-dom";
import "../styles/Home.css";
import homepage from "../images/homepage.jpg";

function Home() {
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
    </div>
  );
}

export default Home;