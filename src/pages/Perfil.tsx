import Cart from "../components/CartComponent";
import Footer from "../components/HomeComponents/Footer";
import Apresentacao from "../components/PerfilComponents/Apresentacao";
import Header from "../components/PerfilComponents/Header";
import Produtos from "../components/PerfilComponents/Produtos";
import { EstiloGlobal } from "../styles";

const Perfil = () => {
  return (
    <>
      <EstiloGlobal />
      <Cart />
      <Header />
      <Apresentacao />
      <Produtos />
      <Footer />
    </>
  );
};

export default Perfil;
