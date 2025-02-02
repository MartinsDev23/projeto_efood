import styled from "styled-components";
import fundo from "../../../assets/images/fundo.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 2148px;
  margin: 0 auto;
  background-image: url(${fundo});
  background-repeat: no repeat;
  background-size: contain;
  align-items: center;
`;

export const Logo = styled.img`
  width: 125px;
  display: block;
  margin: 0 auto;
  padding-top: 64px;
`;

export const Title = styled.h1`
  text-align: center;
  max-width: 650px;
  padding-top: 140px;
  padding-bottom: 40px;
  color: #e66767;
  font-size: 36px;
  line-height: 42px;
  font-weight: bold;
`;
