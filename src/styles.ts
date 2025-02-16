import { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }
`;

export const colors = {
  orange: " #e66767",
  lightOrange: "#ffebd9",
  otherOrange: "#fff9f2",
  white: "#fff",
  black: "#000"
};
