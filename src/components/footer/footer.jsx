import React from 'react';

import Address from 'components/address';

import { StyledFooter, StyledButton, StyledWrapper } from './footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <Address />
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
