import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledQuote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8rem 0;

  background-color: ${(props) => props.theme.white};

  @media ${breakpoint.device.m} {
    padding: 3rem;
  }

  .quote {
    text-align: center;

    font-size: 2.8rem;

    @media ${breakpoint.device.lg} {
      font-size: 2rem;
    }
  }

  .author {
    margin-top: 1.2rem;

    text-align: right;
  }
`;
