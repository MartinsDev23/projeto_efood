import styled from "styled-components";
import lixeira from "../../assets/images/lixeira-de-reciclagem 1.svg";
import { Link } from "react-router-dom";
import { colors } from "../../styles";

type ButtonProps = {
  marginTop: number;
};

export const CartOverlay = styled.div`
  position: fixed;
  content: "";
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  z-index: 2;
`;

export const CartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  justify-content: flex-end;
  overflow-y: scroll;

  .disabled {
    display: none;
  }
`;

export const SideBar = styled.aside`
  height: 100vh;
  width: 360px;
  background-color: ${colors.orange};
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 70%;
  }

  ul {
    margin-top: 32px;
    li {
      display: flex;
      width: 344px;
      height: 100px;
      background-color: ${colors.lightOrange};
      margin-bottom: 16px;
      padding-top: 8px;
      padding-left: 8px;
      position: relative;

      h3 {
        color: ${colors.orange};
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
      }

      p {
        color: ${colors.orange};
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        margin-top: 16px;
      }

      img {
        display: block;
        height: 80px;
        width: 80px;
        object-fit: cover;
        margin-right: 8px;
      }

      @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
        margin-top: 12px;
      }
    }
  }
`;

export const RemoveButton = styled.button`
  background-image: url(${lixeira});
  height: 16px;
  width: 16px;
  object-fit: cover;
  background-repeat: no-repeat;
  border: none;
  position: absolute;
  right: 8px;
  bottom: 8px;
  background-color: ${colors.lightOrange};

  &:hover {
    cursor: pointer;
  }
`;

export const BuyButton = styled(Link)<ButtonProps>`
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "100%")};
  width: 344px;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.orange};
  background-color: ${colors.lightOrange};
  border: none;
  text-decoration: none;
  text-align: center;
  display: block;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Purchase = styled.div`
  margin-top: 40px;
  width: 344px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.lightOrange};

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const EmptyCart = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.lightOrange};
`;
