import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const StyledVideo = styled.div`
  height: 40rem;

  @media ${breakpoint.device.s} {
    height: 25rem;
  }
`;
