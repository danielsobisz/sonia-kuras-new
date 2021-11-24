import styled from "styled-components";
import bgImg from "images/header.jpg";
import breakpoint from "styles/breakpoints";

export const StyledHero = styled.div`
  min-height: 35rem;
  height: calc(95vh - ${(props) => props.theme.headerHeight});
  padding-top: ${(props) => props.theme.headerHeight};

  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;

  .title-wrapper {
    margin-top: 6rem;
    margin-right: 6rem;

    text-align: right;

    @media ${breakpoint.device.lg} {
      margin-top: 0;
      margin-right: 4rem;
    }
  }

  h1 {
    color: ${(props) => props.theme.white};

    @media ${breakpoint.device.lg} {
      font-size: 2.8rem;
    }
  }
`;
