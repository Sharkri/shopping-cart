import "../styles/Header.css";
import Nav from "./Nav";
import Title from "./Title";
import uniqid from "uniqid";

function Header() {
  const links = [
    { name: "Home", to: "/", id: uniqid() },
    { name: "Shop", to: "/shop", id: uniqid() },
  ];

  return (
    <header>
      <Title title="idk" />
      <Nav links={links} />
    </header>
  );
}

export default Header;
