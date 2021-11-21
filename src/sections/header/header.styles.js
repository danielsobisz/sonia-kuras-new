import styled from "styled-components";

export const StyledHeader = styled.header`
  position: ${(props) => (props.isActive ? "fixed" : "absolute")};
  top: 0;
  left: 0;

  width: 100%;

  height: ${(props) =>
    props.isActive ? props.theme.headerHeightScroll : props.theme.headerHeight};

  background-color: ${(props) => (props.isActive ? props.theme.gray : null)};
  color: ${(props) => (props.isActive ? props.theme.black : null)};
  border-bottom: 0.1rem solid
    ${(props) => (props.isActive ? props.theme.black : "transparent")};

  transition: background-color 0.6s, color 0.6s, height 0.4s;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 3rem 6rem;
    margin: ${(props) => (props.isActive ? "1rem 4rem" : "3rem 6rem")};
  }
`;
