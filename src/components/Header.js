import "../styles/Header.css";
import Nav from "./Nav";
import Title from "./Title";

function Header({ cartAmount }) {
  return (
    <header>
      <Title title="idk" />
      <Nav cartAmount={cartAmount} />
    </header>
  );
}

export default Header;
