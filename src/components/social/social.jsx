import React from 'react';

import { StyledSocial } from './social.styles';

const Social = ({ title }) => {
  return (
    <StyledSocial>
      <div>
        <h3>{title}</h3>
      </div>
    </StyledSocial>
  );
};

export default Social;
