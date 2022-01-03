import React from 'react';

import { StyledTitle } from './title.styles';

const Title = ({ isWhite, title, asMain, asContact, isSmaller, className }) => {
  return (
    <StyledTitle
      className={className}
      isWhite={isWhite}
      asMain={asMain}
      asContact={asContact}
      isSmaller={isSmaller}
    >
      {title}
    </StyledTitle>
  );
};

export default Title;
