import React from 'react';

import { StyledSection, StyledInner } from './sectionWrapper.styles';

const SectionWrapper = ({ children, isWhite, id }) => {
  return (
    <StyledSection id={id} isWhite={isWhite}>
      <StyledInner>{children}</StyledInner>
    </StyledSection>
  );
};

export default SectionWrapper;
