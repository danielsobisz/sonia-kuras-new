import React from 'react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CarouselButton from 'components/carouselButton';

import { StyledCarousel } from './carousel.styles';

import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = ({ slides, slidesPerView, hasPagination, hasNavigation, hasAutoplay, loop }) => {
  const slidesMaped = slides.map((slide, i) => <SwiperSlide key={i}>{slide}</SwiperSlide>);
  SwiperCore.use([Pagination, Autoplay, Navigation]);

  return (
    <StyledCarousel>
      <Swiper
        calculateHeight
        loop={loop}
        autoplay={
          hasAutoplay
            ? {
                delay: 5000,
              }
            : ''
        }
        pagination={hasPagination ? { clickable: true } : ''}
        slidesPerView={slidesPerView || 1}
        navigation={
          hasNavigation
            ? {
                nextEl: '.right',
                prevEl: '.left',
              }
            : ''
        }
      >
        {slidesMaped}
      </Swiper>
      {hasNavigation && (
        <>
          <CarouselButton className="left" direction="left" />
          <CarouselButton className="right" />
        </>
      )}
    </StyledCarousel>
  );
};

export default Carousel;
