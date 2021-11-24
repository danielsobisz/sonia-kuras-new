import styled from "styled-components";
import breakpoint from 'styles/breakpoints';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledLi = styled.li`
  margin: 0 1.2rem;

  a,
  button {
    position: relative;

    text-transform: uppercase;
    letter-spacing: 0.2rem;

    background: none;
    border: none;
    color: ${(props) =>
      props.isActive ? props.theme.black : props.theme.white};

    font-size: ${(props) => (props.isActive ? "1.4rem" : "1.8rem")};

    cursor: pointer;

    &:after {
      position: absolute;

      left: 0;
      bottom: -0.8rem;

      content: "";

      height: 0.1rem;
      width: 0;

      transition: 0.4s;

      background: ${(props) =>
        props.isActive ? props.theme.black : props.theme.white};
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }

    @media ${breakpoint.device.lg} {
      font-size: ${(props) => (props.isActive ? "1rem" : "1.4rem")};
    }
  }
`;
