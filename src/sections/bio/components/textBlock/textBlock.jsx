import React from 'react';

import { StyledTextBlock, StyledTitle, StyledContent } from './textBlock.styles';

const TextBlock = ({ title, content }) => {
  return (
    <StyledTextBlock>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>
        {content.map((item) => (
          <div dangerouslySetInnerHTML={{ __html: item.text }} /> // eslint-disable-line
        ))}
      </StyledContent>
    </StyledTextBlock>
  );
};

export default TextBlock;
