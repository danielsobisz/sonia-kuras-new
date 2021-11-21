import React from "react";

import { StyledNav, StyledLi } from "./mainMenu.styles";

import navItems from "data/navItemsData.js";

const MainMenu = ({ isActive }) => {
  const navItemsMapped = navItems?.map((item) => (
    <StyledLi isActive={isActive} key={item.name}>
      <a href={item.href}>{item.name}</a>
    </StyledLi>
  ));

  return <StyledNav>{navItemsMapped}</StyledNav>;
};

export default MainMenu;
