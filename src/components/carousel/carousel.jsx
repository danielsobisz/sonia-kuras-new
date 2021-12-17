import React from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { StyledCarousel } from "./carousel.styles";

// import Pagination from "./components/pagination";

import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ slides, slidesPerView }) => {
  const slidesMaped = slides.map((slide, i) => (
    <SwiperSlide key={i}>{slide}</SwiperSlide>
  ));
  SwiperCore.use([Pagination, Autoplay]);

  return (
    <StyledCarousel>
      <Swiper
        loop
        autoplay={{
          delay: 5000,
        }}
        pagination={{ clickable: true }}
        slidesPerView={slidesPerView ? slidesPerView : 1}
      >
        {slidesMaped}
      </Swiper>
    </StyledCarousel>
  );
};

export default Carousel;
