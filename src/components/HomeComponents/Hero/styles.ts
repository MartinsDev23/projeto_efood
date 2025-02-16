import styled from "styled-components";
import fundo from "../../../assets/images/fundo.svg";
import { colors } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 2148px;
  margin: 0;
  padding: 0;
  background-image: url(${fundo});
  background-repeat: repeat;
  background-size: cover;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
  }
`;

export const Logo = styled.img`
  width: 125px;
  display: block;
  margin: 0 auto;
  padding-top: 64px;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  max-width: 650px;
  padding-top: 140px;
  padding-bottom: 40px;
  color: ${colors.orange};
  font-size: 36px;
  line-height: 42px;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 0 8px;
    font-size: 12px;
    padding-top: 40px;
  }
`;
