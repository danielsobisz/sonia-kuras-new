import styled from "styled-components";

const activeClass = "active";

export const StyledSidebar = styled.div.attrs({ activeClass })`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  max-width: 600px;
  height: 100%;
  overflow-y: auto;

  background-color: ${(props) => props.theme.gray};

  transform: translateX(80rem);
  transition: transform 0.4s;

  &.${activeClass} {
    transform: translateX(0);
  }
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
`;
