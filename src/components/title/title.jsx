import React from "react";

import { StyledTitle } from "./title.styles";

const Title = ({ isWhite, title, asMain }) => {
  return (
    <StyledTitle isWhite={isWhite} asMain={asMain}>
      {title}
    </StyledTitle>
  );
};

export default Title;
