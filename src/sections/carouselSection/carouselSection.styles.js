import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledSection = styled.section`
  padding: 8rem 0;

  background-color: ${(props) => props.theme.blue};

  @media ${breakpoint.device.lg} {
    height: 100%;
    padding: 4rem 0;
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
  width: 120rem;

  background: white;

  z-index: 10;

  /* padding-bottom: 6rem; */

  p {
    color: ${(props) => props.theme.black};
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCarouselWrapper = styled.div`
  width: 120rem;
  height: 100%;
`;

export const StyledImg = styled.div`
  flex-basis: 40%;
  flex-grow: 1;
  height: 100%;
`;

export const StyledTextContent = styled.div`
  flex-basis: 60%;
  padding: 6rem 2rem 6rem 0;
`;

export const StyledText = styled.div`
  margin-top: 2.4rem;
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: black !important;

  p {
    margin-bottom: 1.2rem;
  }
`;
