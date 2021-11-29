import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { StyledNav, StyledLi } from "./mainMenu.styles";

import navItems from "data/navItemsData.js";

const MainMenu = ({ isActive, isVert }) => {
  const navItemsMapped = navItems?.map((item) => (
    <StyledLi
      className={isVert ? "is-vert" : null}
      isActive={isActive}
      key={item.name}
    >
      {item.asScrollTo ? (
        <AnchorLink to={`/${item.href}`} title={item.name} />
      ) : (
        <Link to={item.href}>{item.name}</Link>
      )}
    </StyledLi>
  ));

  return (
    <StyledNav className={isVert ? "is-vert" : null}>
      {navItemsMapped}
    </StyledNav>
  );
};

export default MainMenu;
