import styled, { createGlobalStyle, css } from 'styled-components';
import resetStyle from './resetStyle';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionContainer = styled.section`
  padding: 0 6rem;
  width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  }

  body {
    margin: 0 auto;
    width: 136.6rem;
    letter-spacing: normal;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
