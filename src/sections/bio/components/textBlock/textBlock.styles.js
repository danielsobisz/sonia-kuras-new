import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledTextBlock = styled.div`
  margin-bottom: 2rem;
`;

export const StyledTitle = styled.h2`
  margin: ${({ withNoMargin }) => (withNoMargin ? '0 0 1rem 0' : '1rem 0')};

  @media ${breakpoint.device.s} {
    font-size: 2rem;
  }
`;

export const StyledContent = styled.div`
  margin-left: 1rem;

  p,
  li {
    line-height: 3rem;
    margin: 1rem 0;

    @media ${breakpoint.device.s} {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`;
