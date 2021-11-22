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

    transform: ${(props) =>
      props.isActive ? "translateX(-500px)" : "translateX(0px)"};
    transition: 0.4s;

    h2:nth-of-type(2) {
      margin-top: 0.4rem;

      font-size: 1.4rem;
    }
  }

  .image {
    width: ${(props) => (props.isActive ? "6rem" : "12.5rem")};
    height: ${(props) => (props.isActive ? "6rem" : "12.5rem")};

    transition: 0.4s;
  }
`;
