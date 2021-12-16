import React from "react";

import Icon from "components/icon";

import { StyledSocial, StyledIconWrapper } from "./social.styles";

const Social = ({ title, icon }) => {
  return (
    <StyledSocial>
      <StyledIconWrapper>
        {/* <Icon path={import("../../assets/znanylekarz.svg")} /> */}
      </StyledIconWrapper>
      <div>
        <h3>{title}</h3>
      </div>
    </StyledSocial>
  );
};

export default Social;
