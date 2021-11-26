import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledHamburger = styled.div`
  position: relative;
  z-index: 99;

  width: 60px;
  height: 45px;

  transform: rotate(0deg);
  transition: 0.5s ease-in-out;

  cursor: pointer;

  @media ${breakpoint.device.s} {
    width: 40px;
    height: 35px;
  }
`;

const activeClassName = "active";
export const StyledBar = styled.div.attrs({ activeClassName })`
  position: absolute;
  left: 0;

  display: block;
  opacity: 1;

  height: 4px;
  width: 100%;

  background: ${(props) =>
    props.isActive ? props.theme.black : props.theme.white};
  border-radius: 9px;

  transform: rotate(0deg);
  transition: 0.25s ease-in-out;

  &:nth-child(1) {
    top: 0px;
  }

  &:nth-child(2),
  &:nth-child(3) {
    top: 18px;

    @media ${breakpoint.device.s} {
      top: 12px;
    }
  }

  &:nth-child(4) {
    top: 36px;

    @media ${breakpoint.device.s} {
      top: 24px;
    }
  }

  &.${activeClassName} {
    background: ${(props) => props.theme.black};

    &:nth-child(1) {
      top: 18px;
      left: 50%;

      width: 0%;

      @media ${breakpoint.device.s} {
        top: 12px;
      }
    }

    &:nth-child(2) {
      transform: rotate(45deg);
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
    }

    &:nth-child(4) {
      top: 18px;
      left: 50%;

      width: 0%;

      @media ${breakpoint.device.s} {
        top: 12px;
      }
    }
  }
`;
