import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

import Button from 'components/button';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  @media ${breakpoint.device.m} {
    flex-direction: column;
    gap: 0;
  }
`;

export const StyledImg = styled.div`
  flex-basis: 25%;
`;

export const StyledContent = styled.div`
  flex-basis: 75%;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 2rem;

  @media (min-width: 1440px) {
    right: 0;
  }

  @media ${breakpoint.device.s} {
    position: static;
  }
`;
