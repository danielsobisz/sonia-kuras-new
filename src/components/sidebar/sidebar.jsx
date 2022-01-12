import React from 'react';

import MainMenu from 'components/mainMenu';

import { StyledSidebar, StyledInner } from './sidebar.styles';

const Sidebar = ({ isActive, onClick }) => {
  return (
    <StyledSidebar className={isActive ? 'active' : null}>
      <StyledInner>
        <MainMenu isVert onClick={onClick} />
      </StyledInner>
    </StyledSidebar>
  );
};

export default Sidebar;
