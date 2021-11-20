import React from "react";

import QuoteSection from "./components/quoteSection";

import { StyledHero } from "./hero.styles";

const Hero = () => {
  return (
    <>
      <StyledHero>
        <div className="title-wrapper">
          <h1>Terapia słowem i ruchem</h1>
        </div>
      </StyledHero>

      <QuoteSection />
    </>
  );
};

export default Hero;
