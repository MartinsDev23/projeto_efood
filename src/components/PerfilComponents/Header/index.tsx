import logo from "../../../assets/images/logo.svg";
import { BotaoCart, HeaderContainer } from "./styles";

import { openSideBar } from '../../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../store";

const Header = () => {
  const dispatch = useDispatch()
  const totalItems = useSelector((state: RootReducer) => state.cart.totalQuantity);

  return (
    <HeaderContainer>
      <span>Restaurantes</span>
      <img src={logo} alt="Logo Efood" />
      <BotaoCart onClick={() => dispatch(openSideBar())}>{totalItems} produto(s) no carrinho</BotaoCart>
    </HeaderContainer>
  );
};

export default Header;
