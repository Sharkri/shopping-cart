import { Link } from "react-router-dom";
import "../styles/Title.css";

export default function Title({ title }) {
  // Clickable h1 to return to home or "/"
  return (
    <h1 className="title">
      <Link to="/">{title}</Link>
    </h1>
  );
}
