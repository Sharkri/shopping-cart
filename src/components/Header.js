import "../styles/Header.css";
import Nav from "./Nav";
import Title from "./Title";
import { useLocation } from "react-router-dom";

function Header({ cartAmount, canShake, onSearchbarOpen }) {
  const { pathname } = useLocation();
  let headerStyles = {};

  if (pathname === "/") headerStyles.backgroundColor = "rgba(0, 0, 0, 0.4)";

  return (
    <header style={headerStyles}>
      <Nav
        cartAmount={cartAmount}
        canShake={canShake}
        onSearchbarOpen={onSearchbarOpen}
      />
      <Title title="idk" />
    </header>
  );
}

export default Header;
