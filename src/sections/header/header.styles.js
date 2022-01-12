import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100%;

  height: ${(props) =>
    props.isActive ? props.theme.headerHeightScroll : props.theme.headerHeight};

  background-color: ${(props) => (props.isActive ? props.theme.gray : null)};
  color: ${(props) => (props.isActive ? props.theme.black : null)};
  border-bottom: 0.1rem solid ${(props) => (props.isActive ? props.theme.black : 'transparent')};

  transition: ${(props) =>
    props.isActive ? 'background-color 0.6s, color 0.6s, height 0.4s' : null};

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1rem 4rem;

    @media ${breakpoint.device.m} {
      margin: 1rem 2rem;
    }

    @media ${breakpoint.device.s} {
      margin: 1rem;
    }
  }
`;
