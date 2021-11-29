import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledOffer = styled.section`
  margin-top: 8rem;
`;

export const StyledBar = styled.div`
  display: flex;

  @media ${breakpoint.device.m} {
    flex-wrap: wrap;
  }

  & > * {
    flex-basis: 20%;

    @media ${breakpoint.device.m} {
      flex-basis: 50%;
    }
  }
`;

export const StyledContainer = styled.div`
  padding: 5rem 0;

  &:nth-child(odd) {
    background-color: ${(props) => props.theme.white};

    div div:nth-child(2) {
      order: -1;
    }
  }

  div div:nth-child(2) {
    @media ${breakpoint.device.m} {
      order: -1 !important;
    }
  }
`;
