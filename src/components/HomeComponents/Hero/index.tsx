import logo from "../../../assets/images/logo.svg";
import { Container, Logo, Title } from "./styles";

const Hero = () => {
  return (
      <Container>
        <Logo src={logo} alt="Logo efood" />
        <Title>
          Viva as experiências gastronômicas no conforto da sua casa
        </Title>
      </Container>
  );
};

export default Hero;
