import styled from "styled-components";
import { colors } from "../../../styles";

type ModalProps = {
  backgroundImage?: string;
};

export const ListaDeProdutos = styled.div`
  background-color: ${colors.otherOrange};
  padding-top: 56px;
  padding-bottom: 120px;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: 0;
    place-items: center;
  }
`;
export const ListaItem = styled.li`
  width: 320px;
  height: 450px;
  padding: 8px;
  background-color: ${colors.orange};
  color: ${colors.lightOrange};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }

  h3 {
    padding-top: 8px;
  }

  img {
    height: 180px;
    width: 100%;
    object-fit: cover;
  }
`;

export const Texto = styled.p`
  padding: 12px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const Botao = styled.button`
  width: 100%;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  color: ${colors.orange};
  background-color: ${colors.lightOrange};
  border: none;
  padding: 4px;
  line-height: 18px;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalOverlay = styled.div`
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalContainer = styled.div<ModalProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 32px;
  width: 1024px;
  max-height: 344px;
  background-color: ${colors.orange};
  color: ${colors.white};
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 12px;
  }

  > img {
    width: 16px;
    position: absolute;
    right: 8px;
    top: 8px;

    &:hover {
      cursor: pointer;
    }
  }

  .image {
    img {
      display: block;
      width: 280px;
      height: 280px;
      object-fit: cover;

      @media (max-width: 768px) {
        width: 100%;
        height: 50%;
        display: none;
      }
    }
  }

  .descricao {
    display: block;
    margin-left: 24px;

    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
    }

    h3 {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 32px;
    }
  }
`;

export const BotaoModal = styled(Botao)`
  width: 218px;
  font-size: 14px;
  line-height: 18px;
  position: relative;
`;
