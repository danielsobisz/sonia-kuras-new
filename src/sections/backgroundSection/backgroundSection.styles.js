import styled, { css } from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledBackgroundSection = styled.section`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 50rem;
  height: 80vh;
  ${(props) =>
    props.img
      ? css``
      : css`
          background-color: ${props.color};
        `}

  @media ${breakpoint.device.lg} {
    height: 100%;
    padding: 4rem 0;
  }
`;

export const StyledTextContent = styled.div`
  z-index: 10;
  line-height: 3rem;

  max-width: 80rem;

  @media ${breakpoint.device.lg} {
    max-width: 100%;
  }

  p {
    text-align: center;
    color: ${(props) => props.theme.white};

    @media ${breakpoint.device.s} {
      padding: 0 0.8rem;
    }

    @media ${breakpoint.device.s} {
      /* text-align: left; */
      font-size: 1.4rem;
    }
  }
`;

export const StyledTitleWrapper = styled.div`
  z-index: 10;

  margin-bottom: 6rem;
`;

export const StyledButtonWrapper = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8rem;
`;

export const StyledSlide = styled.div`
  z-index: 10;

  padding-bottom: 6rem;

  p {
    color: ${(props) => props.theme.white};
  }
`;

export const StyledText = styled.p`
  z-index: 10;

  @media ${breakpoint.device.m} {
    margin: 0 2rem;
    text-align: center;
  }
`;

export const StyledBackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.img});
  background-size: cover;
  background-attachment: fixed;

  @media ${breakpoint.device.m} {
    background-attachment: scroll;
  }
  z-index: 1;

  filter: blur(4px);
  transform: scale(1.1);
`;
