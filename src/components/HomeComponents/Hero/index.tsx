import logo from "../../../assets/images/logo.svg";
import { Container, Logo, Titulo } from "./styles";

const Hero = () => {
  return (
      <Container>
        <Logo src={logo} alt="Logo efood" />
        <Titulo>
          Viva as experiências gastronômicas no conforto da sua casa
        </Titulo>
      </Container>
  );
};

export default Hero;
