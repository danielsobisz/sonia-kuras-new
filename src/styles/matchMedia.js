import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const IsBellowLaptop = styled.div`
  display: none;

  @media ${breakpoint.device.lg} {
    display: block;
  }
`;

export const IsAboveLaptop = styled.div`
  display: block;

  @media ${breakpoint.device.lg} {
    display: none;
  }
`;

export const IsBellowTablet = styled.div`
  display: none;

  @media ${breakpoint.device.m} {
    display: block;
  }
`;

export const IsAboveTablet = styled.div`
  display: block;

  @media ${breakpoint.device.m} {
    display: none;
  }
`;
