import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListagemContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding-top: 80px;
  background-color: #fff9f2;
  padding-bottom: 120px;
`;

export const Lista = styled.ul`
  display: grid;
  width: 1024px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
`;

export const ListaItem = styled.ul`
  border: 1px solid #e66767;
  color: #e66767;
  position: relative;
  background-color: #fff;
  padding-bottom: 8px;

  div {
    display: flex;
    justify-content: space-between;
    margin: 8px;
    height: 22px;
    align-items: center;

    div {
      h5 {
        font-size: 18px;
        font-weight: bold;
        margin-right: 8px;
      }
    }
  }

  p {
    margin: 0 8px;
    padding-bottom: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Botao = styled(Link)`
  padding: 4px 6px;
  background-color: #e66767;
  color: #ffebd9;
  font-weight: bold;
  border: none;
  margin: 8px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;


export const Tag = styled.span`
  padding: 4px 6px;
  background-color: #e66767;
  color: #ffebd9;
  font-weight: bold;
  border: none;
  margin: 0 8px;
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TagDestaque = styled(Tag)`
  right: 100px;
`;
