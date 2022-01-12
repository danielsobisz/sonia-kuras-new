import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';
import FbImg from 'images/facebook.png';

export const FaceSlider = styled.div`
  position: fixed;

  right: -30.3rem;
  top: 19rem;

  display: flex;
  z-index: 100;

  transition: 0.5s;

  &:hover {
    right: 0;
  }
`;

export const FaceCode = styled.div`
  padding: 0.5rem;
  width: 28.6rem;
  height: 29.6rem;

  border: solid #0170cf 0.3rem;
  background: #fff;
  border-radius: 0 0 0 0.8rem;

  @media ${breakpoint.device.m} {
    height: auto;
    width: auto;
  }
`;

export const FaceTab = styled.div`
  height: 11rem;
  width: 3.5rem;

  background-image: url(${FbImg});
  background-repeat: no-repeat;
  background-size: contain;

  cursor: pointer;
`;
