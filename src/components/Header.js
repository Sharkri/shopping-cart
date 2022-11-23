import "../styles/Header.css";
import Nav from "./Nav";
import Title from "./Title";
import { useLocation } from "react-router-dom";

function Header({ cartAmount }) {
  const { pathname } = useLocation();
  let headerStyles = {};

  if (pathname === "/") headerStyles.backgroundColor = "rgba(0, 0, 0, 0.4)";

  return (
    <header style={headerStyles}>
      <Title title="idk" />
      <Nav cartAmount={cartAmount} />
    </header>
  );
}

export default Header;
