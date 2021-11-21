import styled from "styled-components";

export const StyledTitle = styled.h2`
  margin-bottom: ${(props) => (props.asMain ? "5rem" : "auto")};

  font-size: 2.8rem;
  font-family: "Bree Serif", sans-serif;

  color: ${(props) => (props.isWhite ? props.theme.white : props.theme.black)};

  text-align: ${(props) => (props.asMain ? "center" : "left")};
`;
