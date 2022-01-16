import * as React from 'react';
import { Helmet } from 'react-helmet';
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

      <Helmet>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=2186738638294469&autoLogAppEvents=1"
        />
      </Helmet>
    </ThemeProvider>
  );
};

export default IndexPage;
