import {InitialCss} from "./InitialCss";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${InitialCss};
  
  .rc-slider-handle,
  .rc-slider-handle:focus,
  .rc-slider-handle:hover,
  .rc-slider-handle:active {
    box-shadow: none !important; /* 그림자 제거 */
    outline: none; /* 브라우저 기본 outline도 제거 */
  }

  *, *::before, *::after {
    font-family: "Pretendard", sans-serif;
  }
`