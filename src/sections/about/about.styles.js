import styled from "styled-components";
import { StyledButton } from "components/button/button.styles.js";
import breakpoint from "styles/breakpoints";

export const StyledAbout = styled.div`
  display: flex;

  gap: 4rem;

  @media ${breakpoint.device.m} {
    flex-direction: column;
  }
`;

export const StyledTextBox = styled.div`
  flex-basis: 50%;

  padding: 3rem;
  margin-top: 3rem;

  border: 0.1rem solid ${(props) => props.theme.black};

  p {
    line-height: 3rem;
  }
`;

export const StyledFlexItem = styled.div`
  flex-basis: 50%;

  &:nth-child(2) {
    margin-top: 4rem;
  }
`;

export const StyledButtonAbout = styled(StyledButton)`
  display: block;

  margin-top: 3.6rem;
  margin-left: auto;
`;
