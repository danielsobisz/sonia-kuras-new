import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { StyledAddress, StyledContainer, StyledPhoneNumber } from './address.styles';

const Address = ({ alignLeft }) => {
  return (
    <StyledAddress>
      <StyledContainer alignLeft={alignLeft}>
        <FontAwesomeIcon icon={faPhone} />

        <StyledPhoneNumber href="tel:+48601391608">601 391 608</StyledPhoneNumber>
      </StyledContainer>

      <StyledContainer alignLeft={alignLeft}>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:soniakuras@gmail.com">soniakuras@gmail.com</a>
      </StyledContainer>
    </StyledAddress>
  );
};

export default Address;
