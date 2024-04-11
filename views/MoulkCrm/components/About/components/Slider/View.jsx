import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './style.module.scss';

export const View = () => {
  return (
    <div className={styles['slider-section']}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={40}
        modules={[Autoplay]}
        autoplay={{
          disableOnInteraction: false,
          delay: 1,
        }}
        breakpoints={{
          360: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        speed={3000}
        loop
        className={styles['text-swipe']}
      >
        <SwiperSlide>
          <div className={styles['swap-text']}>
            <p>Moulk CRM system </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['swap-text']}>
            <p>Moulk CRM system </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['swap-text']}>
            <p>Moulk CRM system </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['swap-text']}>
            <p>Moulk CRM system </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['swap-text']}>
            <p>Moulk CRM system </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
