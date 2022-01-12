import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import navItems from 'data/navItemsData';

import { StyledNav, StyledLi } from './mainMenu.styles';

const MainMenu = ({ isActive, isVert, onClick }) => {
  const navItemsMapped = navItems?.map((item) => (
    <StyledLi className={isVert ? 'is-vert' : null} isActive={isActive} key={item.name}>
      {item.asScrollTo ? (
        <button type="button" onClick={onClick}>
          <AnchorLink to={`/${item.href}`} title={item.name} />
        </button>
      ) : (
        <Link to={item.href}>{item.name}</Link>
      )}
    </StyledLi>
  ));

  return <StyledNav className={isVert ? 'is-vert' : null}>{navItemsMapped}</StyledNav>;
};

export default MainMenu;
