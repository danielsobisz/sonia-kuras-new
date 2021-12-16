import styled from "styled-components";

export const StyledSocial = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 2rem;

  width: 5rem;
  height: 5rem;

  background-color: ${(props) => props.theme.white};
  border-radius: 50%;
`;
