import React from "react";

import { StyledButton } from "./button.styles";

const Button = ({ className, children, onClick }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
