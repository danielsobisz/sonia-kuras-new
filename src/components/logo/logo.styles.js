import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;

  .titles {
    display: ${(props) => (props.isActive ? "none" : "flex")};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.white};

    h2:nth-of-type(2) {
      margin-top: 0.4rem;

      font-size: 1.4rem;
    }
  }

  .image {
    width: ${(props) => (props.isActive ? "6rem" : "12.5rem")};
    height: ${(props) => (props.isActive ? "6rem" : "12.5rem")};
  }
`;
