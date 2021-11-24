import React from "react";

import { ThemeProvider } from "styled-components";

import Header from "sections/header";
import Hero from "sections/hero";

import { theme } from "styles/theme";

import GlobalStyle from "../styles/index.styles";

const OfferPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <Hero />
    </ThemeProvider>
  );
};

export default OfferPage;
