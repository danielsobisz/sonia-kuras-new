import React from 'react';

import { StyledSection, StyledInner } from './sectionWrapper.styles';

const SectionWrapper = ({ children, isWhite }) => {
  return (
    <StyledSection isWhite={isWhite}>
      <StyledInner>{children}</StyledInner>
    </StyledSection>
  );
};

export default SectionWrapper;
