import * as React from "react";
import { ThemeProvider } from "styled-components";
import { navigate } from "gatsby-link";

import Header from "sections/header";
import Hero from "sections/hero";
import About from "sections/about";
import BackgroundSection from "sections/backgroundSection";
import Pricing from "sections/pricing";
import Contact from "sections/contact";

import { theme } from "styles/theme";

import carouselData from "data/carouselData.json";

import GlobalStyle from "../styles/index.styles";

const IndexPage = () => {
  const navigateToOffer = () => {
    navigate("/offer");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <Hero />

      <About />

      <BackgroundSection
        img="dmt.jpg"
        title="Psychoterapia tańcem i ruchem"
        text={carouselData}
      />

      <Pricing />

      <BackgroundSection
        img="offer.jpg"
        title="Oferta"
        onClick={navigateToOffer}
      />

      <Contact />
    </ThemeProvider>
  );
};

export default IndexPage;
