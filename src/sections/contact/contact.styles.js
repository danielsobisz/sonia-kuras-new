import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledAddress = styled.address`
  margin-bottom: 2rem;

  text-align: center;
  font-style: normal;
  font-size: 2rem;

  & > * {
    margin-bottom: 1.2rem;
  }
`;

export const StyledContact = styled.div`
  padding: 8rem 2rem;

  @media ${breakpoint.device.m} {
    padding: 4rem 0 0;
  }
`;

export const StyledSocials = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;

  gap: 2rem;
`;

export const StyledContactInfo = styled.div`
  font-size: 2rem;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  max-width: 100rem;
  margin: 0 auto;

  @media ${breakpoint.device.m} {
    flex-direction: column;
  }

  & > * {
    flex-basis: 50%;

    @media ${breakpoint.device.m} {
      flex-basis: 100%;
    }
  }
`;

export const StyledMapContainer = styled.div``;

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
