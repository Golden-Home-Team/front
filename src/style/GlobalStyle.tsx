import {InitialCss} from "./InitialCss";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${InitialCss};

  *, *::before, *::after {
    font-family: "SUIT Variable", sans-serif;
  }
`