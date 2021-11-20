import React from "react";

import Logo from "components/logo";

import MainMenu from "./components/mainMenu/mainMenu";

import { StyledHeader } from "./header.styles";

const Header = ({ data }) => {
  console.log(data);
  return (
    <StyledHeader>
      <div className="inner">
        <Logo />

        <MainMenu />
      </div>
    </StyledHeader>
  );
};

export default Header;
