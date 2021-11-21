import * as React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import Header from "sections/header";
import Hero from "sections/hero";
import About from "sections/about";
import BackgroundSection from "sections/backgroundSection";
import Pricing from "sections/pricing";

import { theme } from "styles/theme";

import GlobalStyle from "../styles/index.styles";

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <Hero />

      <About />

      <BackgroundSection img="dmt.jpg" title="Psychoterapia tańcem i ruchem" />

      <BackgroundSection img="offer.jpg" title="Oferta" />

      <Pricing />
    </ThemeProvider>
  );
};

export default IndexPage;
