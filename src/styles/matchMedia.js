import styled from "styled-components";
import breakpoint from "styles/breakpoints";

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
