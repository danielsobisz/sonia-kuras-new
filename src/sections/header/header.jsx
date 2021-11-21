import React, { useState, useEffect } from "react";

import Logo from "components/logo";

import MainMenu from "./components/mainMenu/mainMenu";

import { StyledHeader } from "./header.styles";

const Header = () => {
  const [isActive, setIsActive] = useState();

  const setOnScroll = () => {
    if (window.scrollY > 500) {
      setIsActive(true);
    } else if (100 > window.scrollY) {
      setIsActive(false);
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
        <Logo isActive={isActive} />

        <MainMenu isActive={isActive} />
      </div>
    </StyledHeader>
  );
};

export default Header;
