import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePurchaseMutation } from "../../services/api";
import {
  CartContainer,
  CartOverlay,
  SideBar,
} from "../../components/CartComponent/styles";
import { EstiloGlobal } from "../../styles";
import {
  BackButton,
  Campo,
  CampoContainer,
  Formulario,
  SubmitButton,
  Texto,
} from "../Entrega/styles";
import { RootReducer } from "../../store";
import { useSelector } from "react-redux";

const validationSchema = Yup.object({
  cardName: Yup.string().required("O nome no cartão é obrigatório"),
  cardNumber: Yup.string().required("O número do cartão é obrigatório"),
  cardCVV: Yup.string().required("O CVV é obrigatório"),
  expiryMonth: Yup.string().required("O mês de vencimento é obrigatório"),
  expiryYear: Yup.string().required("O ano de vencimento é obrigatório"),
});

const Pagamento = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { deliveryData } = location.state || {};
  const { cartItems } = useSelector((state: RootReducer) => state.cart);
  const [purchase, { isLoading, error }] = usePurchaseMutation();

  const formik = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      cardCVV: "",
      expiryMonth: "",
      expiryYear: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const products = cartItems.map((item) => ({
          id: item.id,
          price: Number(item.price),
          name: item.nome,
        }));

        const response = await purchase({
          products,
          delivery: deliveryData,
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: values.cardCVV,
              expires: {
                month: values.expiryMonth,
                year: values.expiryYear,
              },
            },
          },
        }).unwrap();

        navigate("/confirmacao-pagamento", {
          state: {
            orderId: response.orderId,
            deliveryData,
          },
        });
      } catch (error) {
        console.error("Erro na requisição de pagamento:", error);
      }
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formik.touched;
    const isInvalid = fieldName in formik.errors;
    return isTouched && isInvalid;
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

  return (
    <>
      <EstiloGlobal />
      <CartOverlay>
        <CartContainer>
          <SideBar>
            <Formulario onSubmit={formik.handleSubmit}>
              <Texto>
                Pagamento - Valor a pagar{" "}
                <span>{formatPrice(getTotalPrice())}</span>
              </Texto>
              <label htmlFor="cardName">Nome no cartão</label>
              <Campo
                type="text"
                id="cardName"
                name="cardName"
                value={formik.values.cardName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={checkInputHasError("cardName") ? "error" : ""}
              />
              {formik.touched.cardName && formik.errors.cardName && (
                <div className="error-message">{formik.errors.cardName}</div>
              )}

              <CampoContainer>
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <Campo
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    width={228}
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError("cardNumber") ? "error" : ""}
                  />
                  {formik.touched.cardNumber && formik.errors.cardNumber && (
                    <div className="error-message">
                      {formik.errors.cardNumber}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="cardCVV">CVV</label>
                  <Campo
                    type="text"
                    id="cardCVV"
                    name="cardCVV"
                    width={87}
                    value={formik.values.cardCVV}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError("cardCVV") ? "error" : ""}
                  />
                  {formik.touched.cardCVV && formik.errors.cardCVV && (
                    <div className="error-message">{formik.errors.cardCVV}</div>
                  )}
                </div>
              </CampoContainer>

              <CampoContainer>
                <div>
                  <label htmlFor="expiryMonth">Mês de vencimento</label>
                  <Campo
                    type="text"
                    id="expiryMonth"
                    name="expiryMonth"
                    width={155}
                    value={formik.values.expiryMonth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError("expiryMonth") ? "error" : ""}
                  />
                  {formik.touched.expiryMonth && formik.errors.expiryMonth && (
                    <div className="error-message">
                      {formik.errors.expiryMonth}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="expiryYear">Ano de vencimento</label>
                  <Campo
                    type="text"
                    id="expiryYear"
                    name="expiryYear"
                    width={155}
                    value={formik.values.expiryYear}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={checkInputHasError("expiryYear") ? "error" : ""}
                  />
                  {formik.touched.expiryYear && formik.errors.expiryYear && (
                    <div className="error-message">
                      {formik.errors.expiryYear}
                    </div>
                  )}
                </div>
              </CampoContainer>

              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? "Finalizando pagamento..." : "Finalizar pagamento"}
              </SubmitButton>
            </Formulario>
            <BackButton onClick={() => navigate(-1)}>
              Voltar para a edição de endereço
            </BackButton>
            {error && (
              <p>Ocorreu um erro durante o pagamento. Tente novamente.</p>
            )}
          </SideBar>
        </CartContainer>
      </CartOverlay>
    </>
  );
};

export default Pagamento;
