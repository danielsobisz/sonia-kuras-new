import styled from "styled-components";

export const StyledQuote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5rem 0;

  background-color: ${(props) => props.theme.white};

  .quote {
    text-align: center;

    font-size: 2.8rem;
  }

  .author {
    margin-top: 1.2rem;

    text-align: right;
  }
`;
