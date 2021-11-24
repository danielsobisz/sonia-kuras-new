import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;

  .titles {
    /* display: ${(props) => (props.isActive ? "none" : "flex")}; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.white};

    opacity: ${(props) =>
      props.isActive ? "0" : "1"};
    transition: 0.2s;

    h2:nth-of-type(2) {
      margin-top: 0.4rem;

      font-size: 1.4rem;
    }
  }

  .image {
    width: ${(props) => (props.isActive ? "6rem" : "12.5rem")};
    height: ${(props) => (props.isActive ? "6rem" : "12.5rem")};

    transition: 0.6s;

    svg {
      width: 100%;
      height: 100%;
      fill: ${props => props.isActive ? props.theme.black : props.theme.white};
    }
  }
`;
