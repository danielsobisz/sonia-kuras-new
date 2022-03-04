import styled from 'styled-components';
import { StyledButton } from 'components/button/button.styles';
import breakpoint from 'styles/breakpoints';

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
  margin-top: 5rem;

  border: 0.1rem solid ${(props) => props.theme.black};

  @media ${breakpoint.device.s} {
    padding: 1.5rem;
  }

  p {
    line-height: 3rem;
    text-align: justify;
  }
`;

export const StyledFlexItem = styled.div`
  flex-basis: 50%;
`;

export const StyledButtonAbout = styled(StyledButton)`
  display: block;

  margin-top: 3.6rem;
  margin-left: auto;
`;
