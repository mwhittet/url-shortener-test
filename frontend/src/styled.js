import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, :after, :before {
      box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Column = styled.div`
  padding: 2rem;
  text-align: center;
`;
