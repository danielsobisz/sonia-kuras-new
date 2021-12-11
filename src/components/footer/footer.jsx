import React from "react";
import { navigate } from "gatsby-link";

import Address from "components/address";

import { StyledFooter, StyledButton, StyledWrapper } from "./footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <Address alignLeft />

        <StyledButton onClick={() => navigate("/")}>Wróć</StyledButton>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
