import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  @media ${breakpoint.device.m} {
    flex-direction: column;
  }
`;

export const StyledImg = styled.div`
  flex-basis: 40%;
`;

export const StyledContent = styled.div`
  flex-basis: 60%;
`;
