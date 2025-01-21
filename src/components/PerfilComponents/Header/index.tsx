import logo from '../../../assets/images/logo.svg'
import { HeaderContainer } from './styles';

const Header = () => (
  <HeaderContainer>
    <span>Restaurantes</span>
    <img src={logo} alt="Logo Efood" />
    <span>0 produto(s) no carrinho</span>
  </HeaderContainer>
);

export default Header;
