import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledSection = styled.section`
  padding-top: 8rem;
  padding-bottom: 8rem;

  padding: 8rem 2rem;
  margin: 0 auto;

  background-color: ${(props) => (props.isWhite ? props.theme.white : null)};

  @media ${breakpoint.device.m} {
    padding: 4rem 2rem;
  }
`;

export const StyledInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
