import styled from "styled-components";
import { SubmitButton } from "../Entrega/styles";
import { colors } from "../../styles";

export const Mensagem = styled.p`
  color: ${colors.lightOrange};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 0 8px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const DoneButton = styled(SubmitButton)`
  @media (max-width: 768px) {
    width: 90%;
  }
`
