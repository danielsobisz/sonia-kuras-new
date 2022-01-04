import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { navigate } from 'gatsby-link';

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

import carouselData from 'data/carouselData.json';

import GlobalStyle from '../styles/index.styles';

const IndexPage = () => {
  const navigateToOffer = () => {
    navigate('/offer#quote');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <Hero />

      <About />

      <BackgroundSection
        id="dmt"
        color={theme.orange}
        title="Psychoterapia tańcem i ruchem"
        text={carouselData}
      />

      {/* <BackgroundSection
        img="offer-bg.jpg"
        title="Oferta"
        onClick={navigateToOffer}
      /> */}
      <CarouselSection />

      <Pricing />

      <Events />

      <Contact />

      <ZnanyLekarz />
      <FbWidget />
    </ThemeProvider>
  );
};

export default IndexPage;
