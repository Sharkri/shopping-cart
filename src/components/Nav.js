import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav({ links }) {
  return (
    <nav>
      {links.map((link) => (
        <Link to={link.to}>{link.name}</Link>
      ))}
    </nav>
  );
}

export default Nav;
