import styled from "styled-components";

export const StyledAddress = styled.address`
  margin-bottom: 2rem;

  text-align: center;
  font-style: normal;

  & > * {
    margin-bottom: 1.2rem;
  }
`;

export const StyledContactInfo = styled.div`
  font-size: 2rem;
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
