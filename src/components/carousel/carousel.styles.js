import styled from "styled-components";

export const StyledCarousel = styled.div`
  .swiper-pagination {
    bottom: 0 !important;
    .swiper-pagination-bullet {
      width: 1.2rem;
      height: 1.2rem;

      background-color: ${(props) => props.theme.gray};
    }
  }
`;
