import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledSection = styled.section`
  padding: 8rem 0;

  @media ${breakpoint.device.lg} {
    height: 100%;
    padding: 4rem 0;
  }

  @media ${breakpoint.device.m} {
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

    height: auto;
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
  flex-basis: 40%;
  flex-grow: 1;
  height: 100%;
`;

export const StyledTextContent = styled.div`
  flex-basis: 60%;
  padding: 6rem 5rem 6rem 0;

  @media ${breakpoint.device.m} {
    padding: 3rem 5rem;
  }
`;

export const StyledText = styled.div`
  margin-top: 2.4rem;
  font-size: 1.6rem;
  line-height: 2.3rem;
  /* color: black !important; */

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
  font-family: "Raleway", sans-serif;
  font-size: 2.6rem;

  @media ${breakpoint.device.m} {
    text-align: center;
  }
`;
