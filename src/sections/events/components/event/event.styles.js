import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

import Title from 'components/title';

export const StyledEvent = styled.div`
  display: flex;
  justify-content: space-between;

  width: 40rem;

  background-color: ${(props) => props.theme.white2};

  @media ${breakpoint.device.s} {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  border-right: 0.1rem dashed ${(props) => props.theme.black};

  @media ${breakpoint.device.s} {
    border-right: none;
    border-bottom: 0.1rem dashed ${(props) => props.theme.black};
  }

  span {
    font-family: 'Bree Serif', sans-serif;
  }

  span:nth-of-type(1) {
    font-size: 8rem;
  }

  span:nth-of-type(2) {
    font-size: 3.2rem;

    text-transform: uppercase;
  }
`;

export const StyledGeneral = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: 2rem;

  justify-content: center;
  align-items: flex-start;

  @media ${breakpoint.device.s} {
    align-items: center;
  }

  button {
    align-self: flex-end;

    @media ${breakpoint.device.s} {
      align-self: center;
    }

    a {
      color: ${(props) => props.theme.white};
    }
  }
`;

export const StyledInfo = styled.div`
  align-self: flex-start;

  margin-bottom: 1rem;

  @media ${breakpoint.device.s} {
    margin: 2rem 0;

    align-self: center;
  }

  p {
    position: relative;
    font-size: 1.2rem;

    margin-bottom: 1.2rem;
    padding-left: 1rem;
  }

  p:before {
    content: '';

    position: absolute;
    top: 0;
    left: -1rem;

    width: 0.1rem;
    margin-left: 1rem;

    height: 100%;

    background-color: ${(props) => props.theme.black};
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 2rem;
`;
