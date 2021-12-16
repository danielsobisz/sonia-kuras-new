import styled from "styled-components";
import breakpoint from "styles/breakpoints";

import Button from "components/button";

export const StyledFooter = styled.footer`
  background-color: ${(props) =>
    props.hasDiffBg ? props.theme.white : "transparent"};
`;

export const StyledWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 1440px) {
    padding: 0;
  }

  @media ${breakpoint.device.s} {
    flex-direction: column;
    padding-bottom: 3rem;
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 2rem;

  transform: translateY(-50%);

  @media (min-width: 1440px) {
    right: 0;
  }

  @media ${breakpoint.device.s} {
    position: static;
    transform: none;
  }
`;
