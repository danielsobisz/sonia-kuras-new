import React from "react";

import MainMenu from "components/mainMenu";

import { StyledSidebar, StyledInner } from "./sidebar.styles";

const Sidebar = ({ isActive }) => {
  return (
    <StyledSidebar className={isActive ? "active" : null}>
      <StyledInner>
        <MainMenu isVert />
      </StyledInner>
    </StyledSidebar>
  );
};

export default Sidebar;
