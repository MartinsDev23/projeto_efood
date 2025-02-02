import logo from "../../../assets/images/logo.svg";
import facebook from "../../../assets/images/facebook.svg";
import instagram from "../../../assets/images/instagram-round.svg";
import twitter from "../../../assets/images/twitter.svg";
import { FooterContainer, SecondaryLogo, MediasContainer, Text } from "./styles";

const Footer = () => (
  <FooterContainer>
    <div>
      <SecondaryLogo src={logo} alt="Logo Efood" />
    </div>
    <MediasContainer>
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={twitter} alt="Twitter" />
    </MediasContainer>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </FooterContainer>
);

export default Footer;
