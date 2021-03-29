import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import '@fontsource/poppins';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
}

p {
    margin: 0;
}

ol, ul, li {
  list-style: none;
}

`;

const LayoutContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LayoutContainer>{children}</LayoutContainer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
