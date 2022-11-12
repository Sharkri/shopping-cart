import { Link } from "react-router-dom";

export default function Title({ title }) {
  // Clickable h1 to return to home or "/"
  return (
    <h1>
      <Link to="/">{title}</Link>
    </h1>
  );
}
