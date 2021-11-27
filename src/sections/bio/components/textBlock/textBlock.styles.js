import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledTextBlock = styled.div`
  margin: 2rem 0;
`;

export const StyledTitle = styled.h2`
  margin: 1rem 0;

  @media ${breakpoint.device.s} {
    font-size: 2rem;
  }
`;

export const StyledContent = styled.div`
  margin-left: 1rem;

  p,
  li {
    margin: 1rem 0;

    @media ${breakpoint.device.s} {
      font-size: 1.4rem;
    }
  }
`;
