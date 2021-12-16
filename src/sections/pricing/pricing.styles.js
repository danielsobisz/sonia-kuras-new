import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  max-width: 80rem;
  margin: 0 auto;
  /* grid-template-columns: repeat(auto-fit, minmax(10em, 25em)); */
`;

export const StyledPrice = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 2.8rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  p:nth-of-type(1) {
    width: 40rem;
    margin-right: 3rem;

    @media ${breakpoint.device.m} {
      width: 100%;
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }

  @media ${breakpoint.device.m} {
    font-size: 1.8rem;
  }

  @media ${breakpoint.device.s} {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 100%;
  }
`;

export const StyledContainer = styled.div`
  padding: 6rem 0;

  border-top: 0.1rem solid ${(props) => props.theme.black};
  border-bottom: 0.1rem solid ${(props) => props.theme.black};
`;
