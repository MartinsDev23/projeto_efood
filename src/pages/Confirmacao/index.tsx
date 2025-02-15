import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  CartContainer,
  CartOverlay,
  SideBar,
} from "../../components/CartComponent/styles";
import { EstiloGlobal } from "../../styles";
import { Texto } from "../Entrega/styles";
import { DoneButton, Mensagem } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

const Confirmacao = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootReducer) => state.cart);

  const { orderId } = location.state || {};

  const clearCart = () => {
    dispatch(clear());
  };

  if (cartItems.length === 0) {
    return <Navigate to="/" />;
  }

  if (!orderId) {
    console.error("Informações de confirmação ausentes. Redirecionando...");
    navigate("/");
    return null;
  }

  return (
    <>
      <EstiloGlobal />
      <CartOverlay>
        <CartContainer>
          <SideBar>
            <Texto>
              Pedido realizado - <span>{orderId}</span>
            </Texto>
            <Mensagem>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </Mensagem>
            <Mensagem>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </Mensagem>
            <Mensagem>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </Mensagem>
            <Mensagem>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Mensagem>
            <DoneButton onClick={clearCart}>Concluir</DoneButton>
          </SideBar>
        </CartContainer>
      </CartOverlay>
    </>
  );
};

export default Confirmacao;
