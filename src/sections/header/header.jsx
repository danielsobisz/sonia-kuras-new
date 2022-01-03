import React, { useState, useEffect } from 'react';

import Logo from 'components/logo';
import Hamburger from 'components/hamburger';
import Sidebar from 'components/sidebar';
import MainMenu from 'components/mainMenu';
import Socials from 'components/socials';

import { IsBellowLaptop, IsAboveLaptop } from 'styles/matchMedia';

import { StyledHeader } from './header.styles';

const Header = () => {
  const [isActive, setIsActive] = useState();
  const [isSidebarActive, setIsSidebarActive] = useState();

  const setOnScroll = () => {
    if (window.scrollY > 500) {
      setIsActive(true);
    } else if (100 > window.scrollY) {
      setIsActive(false);
    }
  };

  const setSidebar = () => setIsSidebarActive(!isSidebarActive);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOnScroll();
    });
  }, []);

  return (
    <StyledHeader isActive={isActive}>
      <div className="inner">
        <Logo isActive={isActive} />

        {/* <IsAboveLaptop>
          <MainMenu isActive={isActive} />
        </IsAboveLaptop> */}

        <Hamburger
          onClick={setSidebar}
          isSidebarActive={isSidebarActive}
          isActive={isActive}
        />
        <Sidebar isActive={isSidebarActive} onClick={setSidebar} />
      </div>
    </StyledHeader>
  );
};

export default Header;
