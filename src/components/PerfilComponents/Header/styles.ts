import styled from "styled-components";
import fundoPerfil from '../../../assets/images/fundo-perfil.svg'

export const HeaderContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 auto;
  background-image: url(${fundoPerfil});
  background-repeat: no repeat;
  background-size: contain;
  justify-content: center;
  gap: 340px;
  padding: 64px 0;
  color: #E66767;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  align-items: center;
`;
