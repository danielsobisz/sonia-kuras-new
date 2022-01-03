import React from 'react';

import { StyledSection } from './sectionWrapper.styles';

const SectionWrapper = ({ children, isWhite }) => {
  return <StyledSection isWhite={isWhite}>{children}</StyledSection>;
};

export default SectionWrapper;
