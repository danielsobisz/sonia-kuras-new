import React from 'react';

import { StyledTextBlock, StyledTitle, StyledContent } from './textBlock.styles';

const TextBlock = ({ title, content, withNoMargin }) => {
  return (
    <StyledTextBlock>
      <StyledTitle withNoMargin={withNoMargin}>{title}</StyledTitle>
      <StyledContent>
        {content.map((item) => (
          <div dangerouslySetInnerHTML={{ __html: item.text }} /> // eslint-disable-line
        ))}
      </StyledContent>
    </StyledTextBlock>
  );
};

export default TextBlock;
