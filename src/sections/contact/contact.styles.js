import styled from "styled-components";

export const StyledContactInfo = styled.div`
  font-size: 2rem;
`;

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
  font-family: "Bree Serif", sans-serif;
  font-weight: 500;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledMapContainer = styled.div`
  margin-left: 4rem;
`;

export const StyledIFrame = styled.iframe`
  position: absolute;

  left: 0;
  top: 0;

  height: 100%;
  width: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;
