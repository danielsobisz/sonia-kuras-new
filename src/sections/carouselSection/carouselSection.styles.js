import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledSection = styled.section`
  padding: 8rem 0;

  @media ${breakpoint.device.lg} {
    height: 100%;
    padding: 4rem 0;
  }

  @media ${breakpoint.device.xl} {
    height: auto;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }
`;

export const StyledSlide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 3rem;

  height: 100%;
  width: 140rem;

  background: white;

  z-index: 10;

  @media ${breakpoint.device.xl} {
    width: 100%;
  }

  @media ${breakpoint.device.m} {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 0;
  }

  p {
    color: ${(props) => props.theme.black};
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 6rem;

  @media ${breakpoint.device.m} {
    margin: 0 2rem;
  }
`;

export const StyledCarouselWrapper = styled.div`
  position: relative;

  width: 140rem;
  height: 100%;

  @media ${breakpoint.device.xl} {
    width: 100%;
  }
`;

export const StyledImg = styled.div`
  position: relative;
  flex-basis: 40%;
  flex-grow: 1;
  height: 100%;
`;

export const StyledTextContent = styled.div`
  flex-basis: 60%;
  padding: 4rem 5rem 4rem 0;

  @media (max-width: 1050px) {
    padding: 3rem 5rem 3rem 0;
  }

  @media ${breakpoint.device.m} {
    padding: 3rem 5rem;
  }
`;

export const StyledText = styled.div`
  margin-top: 2.4rem;
  font-size: 1.6rem;
  line-height: 2.3rem;
  text-align: justify;

  @media ${breakpoint.device.lg} {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  @media ${breakpoint.device.m} {
    text-align: center;
  }

  p {
    margin-bottom: 1.2rem;
  }
`;

export const StyledTitle = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 2.6rem;

  @media ${breakpoint.device.m} {
    text-align: center;
  }
`;

export const StyledVideo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000000 !important;

  $animation-speed: 0.3s;
  $animation-function: ease-out;
  $backdrop-color: rgba(0, 0, 0, 0.5);

  @keyframes modal-video {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes modal-video-inner {
    from {
      transform: translate(0, 100px);
    }

    to {
      transform: translate(0, 0);
    }
  }

  .modal-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    cursor: pointer;
    opacity: 1;
    animation-timing-function: ease-out;
    animation-duration: 0.3s;
    animation-name: modal-video;
    -webkit-transition: opacity 0.3s ease-out;
    -moz-transition: opacity 0.3s ease-out;
    -ms-transition: opacity 0.3s ease-out;
    -o-transition: opacity 0.3s ease-out;
    transition: opacity 0.3s ease-out;
  }

  .modal-video-effect-exit {
    opacity: 0;

    & .modal-video-movie-wrap {
      -webkit-transform: translate(0, 100px);
      -moz-transform: translate(0, 100px);
      -ms-transform: translate(0, 100px);
      -o-transform: translate(0, 100px);
      transform: translate(0, 100px);
    }
  }

  .modal-video-body {
    max-width: 960px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  .modal-video-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    @media (orientation: landscape) {
      padding: 10px 60px;
      box-sizing: border-box;
    }
  }

  .modal-video-movie-wrap {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
    background-color: #333;
    animation-timing-function: ease-out;
    animation-duration: 0.3s;
    animation-name: modal-video-inner;
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: -webkit-transform 0.3s ease-out;
    -moz-transition: -moz-transform 0.3s ease-out;
    -ms-transition: -ms-transform 0.3s ease-out;
    -o-transition: -o-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;

    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .modal-video-close-btn {
    position: absolute;
    z-index: 2;
    top: -45px;
    right: 0px;
    display: inline-block;
    width: 35px;
    height: 35px;
    overflow: hidden;
    border: none;
    background: transparent;
    cursor: pointer;

    @media (orientation: landscape) {
      top: 0;
      right: -45px;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      margin-top: -1px;
      background: #fff;
      border-radius: 5px;
      margin-top: -6px;
    }
  }
`;

export const SvgWrapper = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 10rem;
  height: 10rem;

  z-index: 10000000;

  transform: translate(-50%, -50%);

  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;

    fill: white;
  }
`;
