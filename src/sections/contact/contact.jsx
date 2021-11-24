import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import SectionWrapper from "components/sectionWrapper";
import Title from "components/title";
import Map from "components/map";

import {
  StyledContactInfo,
  StyledAddress,
  StyledPhoneNumber,
  StyledMapContainer,
  StyledWrapper,
  StyledContainer,
  StyledIFrame,
} from "./contact.styles";

const Contact = () => {
  return (
    <SectionWrapper>
      <StyledWrapper id="contact">
        <StyledContactInfo>
          <Title title="Kontakt" asMain />
          <StyledAddress>
            <StyledContainer>
              <FontAwesomeIcon icon={faPhone} />

              <StyledPhoneNumber href="tel:+48601391608">
                601 391 608
              </StyledPhoneNumber>
            </StyledContainer>

            <StyledContainer>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:soniakuras@gmail.com">soniakuras@gmail.com</a>
            </StyledContainer>
          </StyledAddress>

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
          {/* <StyledIFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d580.9154668788084!2d18.603875152957986!3d54.38062351258725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd74954ac4ff67%3A0x451871e7bbcf7416!2sKlonowa%201%2C%2080-264%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1637513372821!5m2!1spl!2spl"
            width="750"
            height="500"
            loading="lazy"
          ></StyledIFrame> */}
          {/* <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ height: `400px`, width: `500px` }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          /> */}
        </StyledMapContainer>
      </StyledWrapper>
    </SectionWrapper>
  );
};

export default Contact;
