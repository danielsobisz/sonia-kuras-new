import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;

  @media ${breakpoint.device.s} {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;
