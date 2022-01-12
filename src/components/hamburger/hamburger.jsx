import React from 'react';

import { StyledHamburger, StyledBar } from './hamburger.styles';

const Hamburger = ({ onClick, isSidebarActive, isActive }) => {
  return (
    <StyledHamburger onClick={onClick}>
      <StyledBar isActive={isActive} className={isSidebarActive ? 'active' : null} />
      <StyledBar isActive={isActive} className={isSidebarActive ? 'active' : null} />
      <StyledBar isActive={isActive} className={isSidebarActive ? 'active' : null} />
      <StyledBar isActive={isActive} className={isSidebarActive ? 'active' : null} />
    </StyledHamburger>
  );
};

export default Hamburger;
