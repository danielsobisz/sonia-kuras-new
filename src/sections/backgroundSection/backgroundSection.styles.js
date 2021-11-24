import styled from "styled-components";
import breakpoint from "styles/breakpoints";

export const StyledBackgroundSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 50rem;
  height: 80vh;

  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.img});
  background-size: cover;
  background-attachment: fixed;

  @media ${breakpoint.device.lg} {
    height: 100%;
    padding: 4rem 0;
  }
`;

export const StyledTextContent = styled.div`
  line-height: 3rem;

  max-width: 120rem;
  margin: 0 3rem;

  p {
    text-align: center;
    color: ${(props) => props.theme.white};
  }
`;

export const StyledTitleWrapper = styled.div`
  margin-bottom: 6rem;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8rem;
`;
