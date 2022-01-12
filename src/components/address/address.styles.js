import styled from 'styled-components';

export const StyledAddress = styled.address`
  margin-bottom: 2rem;

  text-align: center;
  font-style: normal;

  & > * {
    margin-bottom: 1.2rem;
  }
`;

export const StyledPhoneNumber = styled.a`
  display: block;

  font-size: 2.8rem;
  font-family: 'Bree Serif', sans-serif;
  font-weight: 500;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.alignLeft ? 'flex-start' : 'center')};
  align-items: center;
  gap: 1.2rem;
`;
