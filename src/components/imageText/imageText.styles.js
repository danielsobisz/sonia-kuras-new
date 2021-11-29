import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  padding: 0 2rem;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 6rem;

  @media ${breakpoint.device.m} {
    flex-direction: column;
  }

  p {
    font-size: 2.4rem;

    line-height: 130%;

    @media ${breakpoint.device.lg} {
      font-size: 2rem;
    }
  }

  p:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

export const StyledText = styled.div`
  flex-basis: 50%;
`;

export const StyledImg = styled.div`
  flex-basis: 50%;

  @media ${breakpoint.device.m} {
    width: 100%;
  }
`;
