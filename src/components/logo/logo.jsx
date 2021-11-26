import React from "react";
import { navigate } from "gatsby-link";
import LogoIcon from "assets/logo.svg";

import { StyledLogo } from "./logo.styles";

const Logo = ({ isActive }) => (
  <StyledLogo isActive={isActive} onClick={() => navigate("/")}>
    <div className="image">
      <LogoIcon />
    </div>

    <div className="titles">
      <h2>Sonia Kuraś</h2>
      <h2>Psychologia i psychoterapia</h2>
    </div>
  </StyledLogo>
);

export default Logo;
