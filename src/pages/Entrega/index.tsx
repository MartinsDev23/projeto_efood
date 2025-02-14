import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

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
} from "./styles";
import { RootReducer } from "../../store";

const Entrega = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state: RootReducer) => state.cart);

  const form = useFormik({
    initialValues: {
      receiver: "",
      description: "",
      city: "",
      zipCode: "",
      numberHouse: "",
      complement: "",
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required("O campo é obrigatório"),
      description: Yup.string().required("O campo é obrigatório"),
      city: Yup.string().required("O campo é obrigatório"),
      zipCode: Yup.string().required("O campo é obrigatório"),
      numberHouse: Yup.string().required("O campo é obrigatório"),
      complement: Yup.string(),
    }),
    onSubmit: (values) => {
      const deliveryData = {
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            numberHouse: values.numberHouse,
            complement: values.complement,
          },
        },

        products: cartItems.map((item) => ({
          id: item.id,
          price: Number(item.price) || 0,
        })),
      };

      navigate("/pagamento", { state: { deliveryData } });
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    return isTouched && isInvalid;
  };

  return (
    <>
      <EstiloGlobal />
      <CartOverlay>
        <CartContainer>
          <SideBar>
            <Formulario onSubmit={form.handleSubmit}>
              <Texto>Entrega</Texto>
              <label htmlFor="receiver">Quem irá receber</label>
              <Campo
                type="text"
                id="receiver"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("receiver") ? "error" : ""}
              />
              {form.touched.receiver && form.errors.receiver && (
                <div className="error-message">{form.errors.receiver}</div>
              )}
              <label htmlFor="description">Endereço</label>
              <Campo
                type="text"
                id="description"
                name="description"
                value={form.values.description}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("description") ? "error" : ""}
              />
              {form.touched.description && form.errors.description && (
                <div className="error-message">{form.errors.description}</div>
              )}
              <label htmlFor="city">Cidade</label>
              <Campo
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("city") ? "error" : ""}
              />
              {form.touched.city && form.errors.city && (
                <div className="error-message">{form.errors.city}</div>
              )}
              <CampoContainer>
                <div>
                  <label htmlFor="zipCode">CEP</label>
                  <Campo
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    width={155}
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("zipCode") ? "error" : ""}
                  />
                  {form.touched.zipCode && form.errors.zipCode && (
                    <div className="error-message">{form.errors.zipCode}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="numberHouse">Número</label>
                  <Campo
                    type="text"
                    id="numberHouse"
                    name="numberHouse"
                    width={155}
                    value={form.values.numberHouse}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("numberHouse") ? "error" : ""}
                  />
                  {form.touched.numberHouse && form.errors.numberHouse && (
                    <div className="error-message">
                      {form.errors.numberHouse}
                    </div>
                  )}
                </div>
              </CampoContainer>
              <label htmlFor="complement">Complemento (opcional)</label>
              <Campo
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError("complement") ? "error" : ""}
              />
              {form.touched.complement && form.errors.complement && (
                <div className="error-message">{form.errors.complement}</div>
              )}
              <SubmitButton type="submit">
                Continuar para o pagamento
              </SubmitButton>
            </Formulario>
            <BackButton onClick={() => navigate(-1)}>
              Voltar para o carrinho
            </BackButton>
          </SideBar>
        </CartContainer>
      </CartOverlay>
    </>
  );
};

export default Entrega;
