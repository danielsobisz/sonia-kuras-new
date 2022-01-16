import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import ZnanyLekarz from 'components/znanyLekarz';
import FbWidget from 'components/fbWidget';

import Header from 'sections/header';
import Hero from 'sections/hero';
import About from 'sections/about';
import BackgroundSection from 'sections/backgroundSection';
import CarouselSection from 'sections/carouselSection';
import Pricing from 'sections/pricing';
import Events from 'sections/events';
import Contact from 'sections/contact';

import { theme } from 'styles/theme';
import { IsAboveTablet } from 'styles/matchMedia';

import carouselData from 'data/carouselData.json';

import GlobalStyle from '../styles/index.styles';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <Hero />

      <About />

      <BackgroundSection
        id="dmt"
        img="offer-bg.jpg"
        title="Psychoterapia tańcem i ruchem"
        text={carouselData}
      />

      {/* <BackgroundSection
        img="offer-bg.jpg"
        title="Oferta"
        onClick={navigateToOffer}
      /> */}
      <CarouselSection />

      <Events />

      <Pricing />

      <Contact />

      <IsAboveTablet>
        <ZnanyLekarz />
        <FbWidget />
      </IsAboveTablet>
    </ThemeProvider>
  );
};

export default IndexPage;
