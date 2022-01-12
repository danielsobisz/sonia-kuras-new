import React from 'react';

import { ThemeProvider } from 'styled-components';

import Header from 'sections/header';
import Hero from 'sections/hero';
import Bio from 'sections/bio';

import ZnanyLekarz from 'components/znanyLekarz';
import FbWidget from 'components/fbWidget';
import Footer from 'components/footer';

import { theme } from 'styles/theme';
import { IsAboveTablet } from 'styles/matchMedia';

import GlobalStyle from '../styles/index.styles';

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <Hero />

      <Bio />

      <Footer />

      <IsAboveTablet>
        <ZnanyLekarz />
        <FbWidget />
      </IsAboveTablet>
    </ThemeProvider>
  );
};

export default About;
