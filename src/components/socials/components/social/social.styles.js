import styled from "styled-components";

export const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  svg {
    fill: ${(props) => (props.active ? "black" : "white")};
    width: 100%;
    height: 100%;

    transition: 0.3s;
  }

  &:hover {
    svg {
      fill: #87a083;
    }
  }
`;
