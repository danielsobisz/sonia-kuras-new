import React from 'react';

import SectionWrapper from 'components/sectionWrapper';
import Title from 'components/title';

import { pricesData } from './pricingData';
import { StyledPrice, StyledWrapper, StyledContainer } from './pricing.styles';
import SlideUp from '../../components/slideUp/slideUp';

const Pricing = () => {
  const pricesDataMaped = pricesData.map((price) => (
    <StyledPrice key={price.title}>
      <p>{price.title}</p>
      <p>{price.price}</p>
    </StyledPrice>
  ));

  return (
    <SectionWrapper>
      <SlideUp>
        <StyledContainer id="pricing">
          <Title title="Cennik" asMain />

          <StyledWrapper>{pricesDataMaped}</StyledWrapper>
        </StyledContainer>
      </SlideUp>
    </SectionWrapper>
  );
};

export default Pricing;
