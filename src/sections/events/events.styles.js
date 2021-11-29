import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledEvents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 4rem;

  @media ${breakpoint.device.lg} {
    grid-template-columns: 1fr;
  }
`;
