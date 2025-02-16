import styled from "styled-components";
import fundoPerfil from "../../../assets/images/fundo-perfil.svg";
import { colors } from "../../../styles";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-image: url(${fundoPerfil});
  background-repeat: repeat;
  background-size: contain;
  justify-content: center;
  gap: 340px;
  padding: 64px 0;
  color: ${colors.orange};
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;

    img {
      margin-top: 18px;
      margin-bottom: 18px;
    }

    span {
      font-size: 22px;
    }
  }

  @media (min-width: 769px) {
    gap: 80px;
  }
`;

export const BotaoCart = styled.button`
  background-color: transparent;
  color: ${colors.orange};
  border: none;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;
