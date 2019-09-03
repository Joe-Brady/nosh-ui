import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import NormalizeCSS from "./assets/NormalizeCSS";

import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Vesper Libre';
    src: url('/static/VesperLibre-Regular.ttf');
  }

  ${NormalizeCSS};

  html, body {
    font-family: 'Vesper Libre', sans-serif;
    background-color: ${theme.example};
  }
`;

interface PropsInterface {
  children: React.ReactNode;
}

const ThemeWrapper = ({ children }: PropsInterface) => (
  <>
    <GlobalStyles />
    {children}
  </>
);

ThemeWrapper.propTypes = {
  children: PropTypes.node
};

export default ThemeWrapper;
