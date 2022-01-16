import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { IsBellowTablet } from 'styles/matchMedia';

import Title from 'components/title';
import Address from 'components/address';
import Map from 'components/map';
import ZnanyLekarz from 'components/znanyLekarz';
import FbWidget from 'components/fbWidget';

import {
  StyledContactInfo,
  StyledContact,
  StyledAddress,
  StyledWrapper,
  StyledMapContainer,
  StyledSocialWrapper,
  StyledName,
} from './contact.styles';

const Contact = () => {
  return (
    <StyledContact>
      <StyledWrapper id="contact">
        <StyledContactInfo>
          <Title title="Kontakt" asContact asMain />

          <StyledAddress>
            <StyledName>Sonia Kuraś</StyledName>
            <Address />
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>ul. Klonowa 1</p>
            <p>Gdańsk-Wrzeszcz (przy dworcu PKP i SKM),</p>
            <p>II piętro</p>
            <p>
              wejście do klatki schodowej od szczytu budynku, <br /> po stronie al. Grunwaldzkiej
            </p>
          </StyledAddress>
        </StyledContactInfo>

        <StyledMapContainer>
          <Map />
        </StyledMapContainer>

        <IsBellowTablet>
          <StyledSocialWrapper>
            <ZnanyLekarz />
            <FbWidget />
          </StyledSocialWrapper>
        </IsBellowTablet>
      </StyledWrapper>
    </StyledContact>
  );
};

export default Contact;
