import React from "react";

import { StyledQuote } from "./quoteSection.styles";

const QuoteSection = () => {
  return (
    <StyledQuote>
      <blockquote>
        <q className="quote">
          Im lepiej rozumiesz siebie i swoje emocje, tym bardziej zaczynasz
          kochać to, co jest.
        </q>
        <p className="author">Baruch De Spinoza</p>
      </blockquote>
    </StyledQuote>
  );
};

export default QuoteSection;
