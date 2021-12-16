import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import SectionWrapper from "components/sectionWrapper";
import Social from "components/social";
import Title from "components/title";
import Address from "components/address";
import Map from "components/map";

import socialData from "data/socialData.json";

import {
  StyledContactInfo,
  StyledSocials,
  StyledContact,
  StyledAddress,
  StyledWrapper,
  StyledMapContainer,
} from "./contact.styles";

const Contact = () => {
  // const socialDataMaped = socialData?.map((item) => <Social {...item} />);

  return (
    <StyledContact>
      <StyledWrapper id="contact">
        <StyledContactInfo>
          <Title title="Kontakt" asMain />

          {/* <StyledSocials>{socialDataMaped}</StyledSocials> */}

          <Address />

          <StyledAddress>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>ul. Klonowa 1</p>
            <p>Gdańsk-Wrzeszcz (przy dworcu PKP i SKM),</p>
            <p>II piętro</p>
            <p>
              wejście do klatki schodowej od szczytu budynku, <br /> po stronie
              al. Grunwaldzkiej
            </p>
          </StyledAddress>
        </StyledContactInfo>

        <StyledMapContainer>
          <Map />
        </StyledMapContainer>
      </StyledWrapper>
    </StyledContact>
  );
};

export default Contact;
