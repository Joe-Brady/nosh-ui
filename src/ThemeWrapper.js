import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  example: "green"
};

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.example};
  }
`;

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);

ThemeWrapper.propTypes = {
  children: PropTypes.node
};

export default ThemeWrapper;
