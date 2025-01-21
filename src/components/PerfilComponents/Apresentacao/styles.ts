import styled from "styled-components";
import imagemPerfil from "../../../assets/images/imagem-perfil.svg";

export const ApresentacaoContainer = styled.div`
  background-image: url(${imagemPerfil});
  background-repeat: no repeat;
  background-size: contain;
  width: 1366px;
  height: 280px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;

export const TipoRestaurante = styled.span`
    font-size: 32px;
    line-height: 32px;
    color: #fff;
    position: absolute;
    left: 170px;
    top: 24px;
`
export const NomeRestaurante = styled.h2`
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    position: absolute;
    left: 170px;
    bottom: 32px;
`

