import "../styles/Header.css";
import Nav from "./Nav";
import Title from "./Title";

function Header({ links }) {
  return (
    <header>
      <Title title="idk" />
      <Nav links={links} />
    </header>
  );
}

export default Header;
