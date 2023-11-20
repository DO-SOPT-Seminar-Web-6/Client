import { createGlobalStyle } from 'styled-components';
import resetStyle from './resetStyle';

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  }

  body {
    width: 136.6rem;
    margin: 0 auto;
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: normal;
  }
`;

export default GlobalStyle;
