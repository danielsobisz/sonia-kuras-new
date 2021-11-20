import React, { useState, useEffect } from "react";

import Logo from "components/logo";

import MainMenu from "./components/mainMenu/mainMenu";

import { StyledHeader } from "./header.styles";

const Header = () => {
  const [isActive, setIsActive] = useState();

  const setOnScroll = () => {
    if (window.scrollY > 500) {
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOnScroll();
    });
  }, []);

  return (
    <StyledHeader isActive={isActive}>
      <div className="inner">
        <Logo />

        <MainMenu />
      </div>
    </StyledHeader>
  );
};

export default Header;
