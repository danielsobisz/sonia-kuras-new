import styled from 'styled-components';
import breakpoint from 'styles/breakpoints';

export const StyledCarousel = styled.div`
  width: 100%;

  .swiper-container {
    max-height: 100%;
  }

  .swiper-pagination {
    bottom: 0 !important;
    .swiper-pagination-bullet {
      width: 1.2rem;
      height: 1.2rem;

      background-color: ${(props) => props.theme.gray};
    }
  }

  .swiper-slide {
    height: auto;

    /* @media ${breakpoint.device.m} {
      height: 100%;
    } */
  }
`;
