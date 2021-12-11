import styled from "styled-components";
import breakpoint from "styles/breakpoints";

import Button from "components/button";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.white};
`;

export const StyledWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1440px;
  width: 100%;
  padding: 0 2rem;

  @media ${breakpoint.device.s} {
    flex-direction: column;
    padding-bottom: 3rem;
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 0;

  transform: translateY(-50%);

  @media ${breakpoint.device.s} {
    position: static;
    transform: none;
  }
`;
