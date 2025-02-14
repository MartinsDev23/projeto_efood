import styled from "styled-components";

type CampoProps = {
  width?: number;
};

export const Formulario = styled.form`
  width: 344px;
  color: #ffebd9;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  .error-message {
    margin-bottom: 24px;
    font-style: italic;
  }
`;

export const Texto = styled.h3`
  font-weight: bold;
  font-size: 16px;
  color: #ffebd9;
  margin-top: 32px;
  margin-bottom: 16px;
  line-height: 18px;
`;

export const Campo = styled.input<CampoProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: #ffebd9;
  border: none;
  display: flex;
`;

export const CampoContainer = styled.div`
  width: 344px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  margin-top: 8px;
  width: 344px;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #e66767;
  background-color: #ffebd9;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  width: 344px;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #e66767;
  background-color: #ffebd9;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
