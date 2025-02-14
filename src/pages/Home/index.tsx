import Footer from "../../components/HomeComponents/Footer";
import Hero from "../../components/HomeComponents/Hero";
import Listagem from "../../components/HomeComponents/Listagem";
import { EstiloGlobal } from "../../styles";

const Home = () => {
  return (
    <>
      <EstiloGlobal />
      <Hero />
      <Listagem />
      <Footer />
    </>
  );
};
export default Home;
