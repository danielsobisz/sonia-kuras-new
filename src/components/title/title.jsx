import React from 'react';

import { StyledTitle } from './title.styles';

const Title = ({ isCentered, isWhite, title, asMain, asContact, isSmaller, className }) => {
  return (
    <StyledTitle
      className={className}
      isWhite={isWhite}
      asMain={asMain}
      asContact={asContact}
      isSmaller={isSmaller}
      isCentered={isCentered}
    >
      {title}
    </StyledTitle>
  );
};

export default Title;
