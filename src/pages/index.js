import * as React from "react";
import { graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import Header from "sections/header";
import Hero from "sections/hero";

import { theme } from "styles/theme";

import GlobalStyle from "../styles/index.styles";

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
    </ThemeProvider>
  );
};

export default IndexPage;
