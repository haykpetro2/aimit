import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-section-overlay']}>
        <div className="container">
          <div className={styles['hero-section-mainpanel']}>
            <div className={styles['hero-headlie']}>
              <h1 id="letters">
                <span>M</span>
                <span>A</span>
                <span>L</span>
                <span>L</span>
                <span>S</span>
              </h1>
            </div>
            <div className={styles.circle} id="circle" />
          </div>
        </div>
        <div className={styles['text-swap-main']}>
          <div className={styles['text-swap']}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={40}
              autoplay={{
                disableOnInteraction: false,
                delay: 1,
              }}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 5,
                },
                1450: {
                  slidesPerView: 6,
                },
              }}
              speed={3000}
              loop
              className={styles['screen-swipe']}
            >
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>online shop</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>online shop</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>online shop</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>online shop</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>online shop</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>online shop</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles['text-swap']}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={20}
              autoplay={{
                disableOnInteraction: false,
                delay: 1,
                reverseDirection: true,
              }}
              speed={3000}
              loop
              className={styles['screen-swipe']}
              breakpoints={{
                360: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 5,
                },
                1450: {
                  slidesPerView: 6,
                },
              }}
            >
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>malls</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>malls</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>malls</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>malls</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>malls</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>malls</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>malls</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles['swap-text']}>
                  <p>malls</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
