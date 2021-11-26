import React from "react";
import { navigate } from "gatsby-link";

import Address from "components/address";
import Button from "components/button";

import { StyledFooter } from "./footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Address alignLeft />

      <Button onClick={() => navigate(-1)}>Wróć</Button>
    </StyledFooter>
  );
};

export default Footer;
