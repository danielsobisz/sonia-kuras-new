import React from 'react';
import ArrowLeft from 'assets/arrow-left.svg';
import ArrowRight from 'assets/arrow-right.svg';

import { StyledButton } from './carouselButton.styles';

const CarouselButton = ({ direction, className }) => {
  return (
    <StyledButton direction={direction} className={className}>
      {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </StyledButton>
  );
};

export default CarouselButton;
