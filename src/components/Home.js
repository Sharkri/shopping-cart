import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Link to="/shop" className="shop-now">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;
