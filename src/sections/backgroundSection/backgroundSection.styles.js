import styled from "styled-components";

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
`;

export const StyledTextContent = styled.div`
  line-height: 3rem;

  max-width: 120rem;

  p {
    text-align: center;
    color: ${(props) => props.theme.white};
  }
`;

export const StyledTitleWrapper = styled.div`
  margin-bottom: 6rem;
`;

export const StyledButtonWrapper = styled.div`
  margin-top: 8rem;
`;
