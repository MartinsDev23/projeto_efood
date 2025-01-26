import styled from "styled-components";

export const ListaDeProdutos = styled.div`
  background-color: #fff9f2;
  margin: 0 auto;
  padding-top: 56px;
  padding-bottom: 120px;
  max-width: 100%;
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  width: 1024px;
  margin: 0 auto;
`;
export const ListaItem = styled.li`
  width: 320px;
  padding: 8px;
  background-color: #e66767;
  color: #ffebd9;
`;

export const Texto = styled.p`
  padding: 8px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const Botao = styled.button`
  width: 100%;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  color: #e66767;
  background-color: #ffebd9;
  border: none;
  padding: 4px 0;
  line-height: 18px;

  &:hover {
    cursor: pointer;
  }
`;
