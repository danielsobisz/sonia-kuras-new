import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledTitle = styled.h2`
  margin-bottom: ${(props) => (props.asMain ? '5rem' : 'auto')};

  font-size: ${(props) => (props.isSmaller ? '2.4rem' : '3.2rem')};
  font-family: ${(props) =>
    props.asContact ? '"Cinzel", sans-serif' : "'Raleway', sans-serif"};
  font-weight: 700;
  font-style: italic;
  font-style: ${(props) => (props.asContact ? 'normal' : 'italic')};
  font-weight: 700;

  color: ${(props) => (props.isWhite ? props.theme.white : props.theme.black)};

  text-align: ${(props) => (props.asMain ? 'center' : 'left')};

  @media ${breakpoint.device.s} {
    margin-bottom: ${(props) => (props.asMain ? '2.5rem' : 'auto')};
  }
`;
