import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledLogo = styled.div`
  display: flex;

  cursor: pointer;

  .image {
    width: ${({ isActive }) => (isActive ? '15rem' : '25rem')};
    height: ${({ isActive }) => (isActive ? '5rem' : '10rem')};

    transition: 0.6s;

    svg {
      width: 100%;
      height: 100%;
      fill: ${(props) =>
        props.isActive ? props.theme.black : props.theme.white};
    }
  }
`;
