import React from 'react';

import { StyledButton } from './button.styles';

const Button = ({ className, children, onClick, href }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {href ? <a href={href}>{children}</a> : children}
    </StyledButton>
  );
};

export default Button;
