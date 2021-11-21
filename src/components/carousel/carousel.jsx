import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = ({ slides, slidesPerView }) => {
  return (
    <Swiper slidesPerView={slidesPerView ? slidesPerView : 1}>
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
