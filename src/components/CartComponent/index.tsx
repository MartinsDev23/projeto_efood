import {
  Purchase,
  RemoveButton,
  CartContainer,
  CartOverlay,
  EmptyCart,
  BuyButton,
  SideBar,
} from "./styles";

import { RootReducer } from "../../store";

import { useGetRestaurantQuery } from "../../services/api";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remove, close } from "../../store/reducers/cart";

const Cart = () => {
  const { id } = useParams();
  const { data: produto } = useGetRestaurantQuery(id!);
  const quantityOfItems = useSelector(
    (state: RootReducer) => state.cart.totalQuantity
  );

  const dispatch = useDispatch();
  const { cartItems, isVisible } = useSelector(
    (state: RootReducer) => state.cart
  );

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const closeSideBar = (evento: React.MouseEvent) => {
    if (evento.target === evento.currentTarget) {
      dispatch(close());
    }
  };

  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, valorAtual) => {
      return (acc += valorAtual.preco!);
    }, 0);
  };

  if (produto) {
    return (
      <div>
        {isVisible && (
          <CartOverlay>
            <CartContainer onClick={closeSideBar}>
              <SideBar>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <p>
                          R$ <span>{item.preco}</span>
                        </p>
                      </div>
                      <RemoveButton onClick={() => removeItem(item.id)} />
                    </li>
                  ))}
                </ul>
                {quantityOfItems > 0 ? (
                  <>
                    <Purchase>
                      <p>Valor total</p>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </Purchase>
                    <BuyButton marginTop={16} to="/entrega">
                      Continuar com a entrega
                    </BuyButton>
                  </>
                ) : (
                  <EmptyCart>O carrinho está vazio</EmptyCart>
                )}
              </SideBar>
            </CartContainer>
          </CartOverlay>
        )}
      </div>
    );
  }
};

export default Cart;
