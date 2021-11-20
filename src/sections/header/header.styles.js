import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  ${(props) =>
    props.isActive
      ? `
      position: fixed;
      `
      : null}

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 3rem 6rem;
  }
`;
