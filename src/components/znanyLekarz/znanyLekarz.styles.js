import styled from 'styled-components';
import ZLImg from 'images/znanylekarz.png';

export const ZLSlider = styled.div`
  position: fixed;

  right: -30.4rem;
  top: 31rem;

  display: flex;
  z-index: 101;

  transition: 0.5s;

  &:hover {
    right: 0;
  }
`;

export const ZLCode = styled.div`
  padding: 0.5rem;
  width: 28.6rem;
  height: 29.6rem;

  border: solid #20c997 0.3rem;
  background: #fff;
  border-radius: 0 0 0 0.8rem;
`;

export const ZLTab = styled.div`
  height: 11rem;
  width: 2.5rem;

  background-image: url(${ZLImg});
  background-repeat: no-repeat;
  background-size: contain;

  cursor: pointer;
`;
