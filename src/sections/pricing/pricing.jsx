import React from "react";

import SectionWrapper from "components/sectionWrapper";
import Title from "components/title";

import { pricesData } from "./pricingData";
import { StyledPrice, StyledWrapper, StyledContainer } from "./pricing.styles";

const Pricing = () => {
  const pricesDataMaped = pricesData.map((price) => (
    <StyledPrice key={price.title}>
      <p>{price.title}</p>
      <p>{price.price}</p>
    </StyledPrice>
  ));

  return (
    <SectionWrapper>
      <StyledContainer>
        <Title title="Cennik" asMain />

        <StyledWrapper>{pricesDataMaped}</StyledWrapper>
      </StyledContainer>
    </SectionWrapper>
  );
};

export default Pricing;
