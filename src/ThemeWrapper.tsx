import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${theme.example};
  }
`;

interface PropsInterface {
  children: any;
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
