import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

  body {
    padding: 0;
    margin: 0;
    font-family: ${({theme}) => theme.fontfamily.poppins}, sans-serif;
    font-weight: ${({theme}) => theme.fontsize.ultrathin};
    font-size: 14px;
    color: ${({theme}) => theme.colors.gray};
    background-color: ${({theme}) => theme.colors.dark};
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a:link {
    color: ${({theme}) => theme.colors.white};        
  }

  a:hover, a:visited, a:link, a:active {
    color: ${({theme}) => theme.colors.white};
  }

  .wrapper {
    display: grid;
    grid-template-columns: 100px 1fr;
  }

  .sidebar_wrapper {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .tables_wrapper {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
  }

  .infoPanel_box2 {
    margin: 60px 40px 40px 40px;
    padding: 0 40px 40px 40px;
    background-color: ${({theme}) => theme.colors.bluetable};
  }
`;

const Layout = ({children}) => (
  <ThemeProvider theme={theme}>
      <GlobalStyle />
        {children}
  </ThemeProvider>
);

export default Layout;