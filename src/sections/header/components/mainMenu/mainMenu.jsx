import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { StyledNav, StyledLi } from "./mainMenu.styles";

import navItems from "data/navItemsData.js";

const MainMenu = ({ isActive }) => {
  const navItemsMapped = navItems?.map((item) => (
    <StyledLi isActive={isActive} key={item.name}>
      {item.asScrollTo ? (
         <AnchorLink
         to={`/${item.href}`}
         title={item.name}


       />
      ) : (
        <Link to={item.href}>{item.name}</Link>
      )}
    </StyledLi>
  ));

  return <StyledNav>{navItemsMapped}</StyledNav>;
};

export default MainMenu;
