import styled from "styled-components";

type ModalProps = {
  backgroundImage?: string;
};

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
  height: 470px;
  padding: 8px;
  background-color: #e66767;
  color: #ffebd9;
  position: relative;

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
  width: 300px;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  color: #e66767;
  background-color: #ffebd9;
  border: none;
  padding: 4px 0;
  line-height: 18px;
  position: absolute;
  bottom: 8px;

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
  height: 344px;
  background-color: #E66767;
  color: #fff;
  position: relative;
  display: flex;

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
    }
  }

  .descricao {
    display: block;
    margin-left: 24px;

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
`