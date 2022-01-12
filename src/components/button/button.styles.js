import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 1rem 4rem;

  font-size: 1.8rem;
  font-family: 'Raleway', sans-serif;

  letter-spacing: 0.2rem;

  height: auto;

  text-transform: uppercase;

  background-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  border: 0.1rem solid transparent;

  cursor: pointer;

  transition: background-color 0.4s, color 0.4s, border 0.4s;

  &:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.orange};
    border-color: ${(props) => props.theme.orange};

    a {
      color: ${(props) => props.theme.orange};
    }
  }
`;
