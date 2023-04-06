import "./Footer.css";
import Container from "../Container";

const Footer = () => {
  
  return (
    <footer>
      <Container>
        <nav aria-label="Redes sociais da Organo">
          <ul className="socials">
            <li><a href="/" aria-label="Facebook" aria-disabled><img src="/img/facebook.svg" alt="Facebook"/></a></li>
            <li><a href="/" aria-label="Twitter" aria-disabled><img src="/img/twitter.svg" alt="Twitter"/></a></li>
            <li><a href="/" aria-label="Instagram" aria-disabled><img src="/img/instagram.svg" alt="Instagram"/></a></li>
          </ul>
        </nav>

        <img className="logo" src="/img/logo.svg" alt="Organo"/>

        <h2>Desenvolvido por Alura & <a href="https://www.github.com/lvamorim" target="_blank" aria-label="Perfil do GitHub">LV</a></h2>
      </Container>
    </footer>
  )
}

export default Footer;