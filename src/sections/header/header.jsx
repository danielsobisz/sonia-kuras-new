import React, { useState, useEffect } from 'react';

import Logo from 'components/logo';
import Hamburger from 'components/hamburger';
import Sidebar from 'components/sidebar';

import { StyledHeader } from './header.styles';

const Header = () => {
  const [isActive, setIsActive] = useState();
  const [isSidebarActive, setIsSidebarActive] = useState();

  const setOnScroll = () => {
    if (window.scrollY > 300) {
      setIsActive(true);
    } else if (window.scrollY < 100) {
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

        <Hamburger onClick={setSidebar} isSidebarActive={isSidebarActive} isActive={isActive} />
        <Sidebar isActive={isSidebarActive} onClick={setSidebar} />
      </div>
    </StyledHeader>
  );
};

export default Header;
