import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledMap = styled.iframe`
  width: 45rem;
  height: 40rem;

  @media ${breakpoint.device.m} {
    width: 100%;
  }
`;
