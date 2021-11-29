import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledEvents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 4rem;

  @media ${breakpoint.device.lg} {
    grid-template-columns: 1fr;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 4rem;

  p {
    font-size: 4.8rem;
  }

  a {
    color: ${(props) => props.theme.white};
  }
`;
