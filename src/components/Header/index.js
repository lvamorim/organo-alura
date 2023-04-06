import "./Header.css";
import Container from "../Container";

const Header = () => {
  
  return (
    <header>
      <Container>
        <img className="logo" src="/img/logo.svg" alt="Organo"/>
        <h1>Pessoas e times</h1>
        <h2>organizados em um só lugar!</h2>
      </Container>
    </header>
  );
}

export default Header;