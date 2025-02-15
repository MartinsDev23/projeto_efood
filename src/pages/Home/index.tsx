import Footer from "../../components/HomeComponents/Footer";
import Hero from "../../components/HomeComponents/Hero";
import Listagem from "../../components/HomeComponents/Listagem";
import { EstiloGlobal } from "../../styles";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <EstiloGlobal />
      <Hero />
      <Listagem />
      <Footer />
    </HomeContainer>
  );
};
export default Home;
