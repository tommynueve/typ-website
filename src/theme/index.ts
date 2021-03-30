import { createGlobalStyle } from 'styled-components';
import '@fontsource/poppins';

const theme = {
  main: '#0D7AB9',
  blue: '#0D7AB9',
  grey: '#F9F9F9',
  magenta: '#DD1846',
  darkYellow: '#D5AC00',
  black: '#10100D',
};

export default theme;

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
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
