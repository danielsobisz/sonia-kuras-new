import React from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

import { StyledNav, StyledLi } from "./mainMenu.styles";

import navItems from "data/navItemsData.js";

const MainMenu = ({ isActive }) => {
  const navItemsMapped = navItems?.map((item) => (
    <StyledLi isActive={isActive} key={item.name}>
      {item.asScrollTo ? (
        <button onClick={() => scrollTo(item.href)}>{item.name}</button>
      ) : (
        <Link to={item.href}>{item.name}</Link>
      )}
    </StyledLi>
  ));

  return <StyledNav>{navItemsMapped}</StyledNav>;
};

export default MainMenu;
