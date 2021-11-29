import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  max-width: 70rem;
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
    margin-right: 3rem;
  }

  @media ${breakpoint.device.m} {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 100%;

    font-size: 1.8rem;
  }
`;

export const StyledContainer = styled.div`
  padding: 6rem 0;

  border-top: 0.1rem solid ${(props) => props.theme.black};
  border-bottom: 0.1rem solid ${(props) => props.theme.black};
`;
