import styled from "styled-components";
import InputMask from "react-input-mask";
import { colors } from "../../styles";

type CampoProps = {
  width?: number;
};

export const Formulario = styled.form`
  width: 344px;
  color: ${colors.lightOrange};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  .error-message {
    margin-bottom: 24px;
    font-style: italic;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Texto = styled.h3`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.lightOrange};
  margin-top: 32px;
  margin-bottom: 16px;
  line-height: 18px;
`;

export const Campo = styled(InputMask)<CampoProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${colors.lightOrange};
  border: none;
  display: flex;
`;

export const CampoContainer = styled.div`
  width: 344px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const BackButton = styled.button`
  margin-top: 8px;
  width: 344px;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.orange};
  background-color: ${colors.lightOrange};
  border: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  width: 344px;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.orange};
  background-color: ${colors.lightOrange};
  border: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
