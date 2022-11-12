import "../styles/Header.css";
import Nav from "./Nav";
import Title from "./Title";

function Header({ links }) {
  return (
    <header>
      <Nav links={links} />
      <Title title="idk" />
    </header>
  );
}

export default Header;
