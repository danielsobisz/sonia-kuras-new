import React from "react";

import { ThemeProvider } from "styled-components";

import Header from "sections/header";
import Hero from "sections/hero";
import Offer from "sections/offer";

import Footer from "components/footer";

import { theme } from "styles/theme";

import GlobalStyle from "../styles/index.styles";

const OfferPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <Hero />

      <Offer />

      <Footer />
    </ThemeProvider>
  );
};

export default OfferPage;
