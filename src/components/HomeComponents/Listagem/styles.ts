import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../styles";

export const ListagemContainer = styled.div`
  width: 100%;
  padding-top: 80px;
  background-color: ${colors.otherOrange};
  padding-bottom: 120px;
  align-items: center;
`;

export const Lista = styled.ul`
  display: grid;
  width: 1024px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 24px;
  }

  @media (max-width: 1023px) {
    width: 90%;
    gap: 40px;
  }
`;

export const ListaItem = styled.li`
  border: 1px solid ${colors.orange};
  color: ${colors.orange};
  position: relative;
  background-color: ${colors.white};
  padding-bottom: 8px;
  max-width: 475px;
  max-height: 500px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

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
  background-color: ${colors.orange};
  color: ${colors.lightOrange};
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
  background-color: ${colors.orange};
  color: ${colors.lightOrange};
  font-weight: bold;
  border: none;
  margin: 0 8px;
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const TagDestaque = styled(Tag)`
  right: 100px;
`;
