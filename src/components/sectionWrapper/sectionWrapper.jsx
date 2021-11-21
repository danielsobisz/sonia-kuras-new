import React from "react";

import { StyledSection } from "./sectionWrapper.styles";

const SectionWrapper = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default SectionWrapper;
