import styled, { css } from "styled-components";
import breakpoint from "styles/breakpoints";

const setDirection = (direction) => {
  if (direction === "left") {
    return css`
      left: -3rem;
      @media ${breakpoint.device.m} {
        left: -1.5rem;
      }
    `;
  }
  return css`
    right: -3rem;
    @media ${breakpoint.device.m} {
      right: -1.5rem;
    }
  `;
};

export const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => setDirection(props.direction)};
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 6rem;
  height: 6rem;
  transform: translateY(-50%);

  background-color: ${(props) => props.theme.white};
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem rgb(0 0 0 / 16%);
  border: none;

  cursor: pointer;

  @media ${breakpoint.device.m} {
    width: 3rem;
    height: 3rem;
  }
`;
