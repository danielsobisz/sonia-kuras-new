import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledFooter = styled.footer`
  background-color: ${(props) => (props.hasDiffBg ? props.theme.white : 'transparent')};
`;

export const StyledWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1440px;
  margin: 0 auto;
  padding: 6rem 2rem 0 2rem;

  @media (min-width: 1440px) {
    padding: 6rem 0 0 0;
  }

  @media ${breakpoint.device.s} {
    flex-direction: column;
    padding-bottom: 3rem;
  }
`;
