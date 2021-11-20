import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledLi = styled.li`
  margin: 0 1.2rem;

  a {
    text-transform: uppercase;
    letter-spacing: 0.2rem;

    color: ${(props) => props.theme.white};
  }
`;
