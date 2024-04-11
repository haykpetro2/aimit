import React from 'react';
import Image from 'next/image';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tilt from 'react-parallax-tilt';
import 'swiper/css';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import { slidersListLeft, slidersMobileList } from './Constants/constants';
import styles from './style.module.scss';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';

export const View = ({ t }) => {
  SwiperCore.use([Autoplay]);
  const isMobile = useMediaQuery(SCREENS.isMobile);

  return (
    <section className={styles['screens-section']}>
      <div className="container">
        <div className="section-heading">
          <h3>{t('screens')}</h3>
        </div>
      </div>
      <div className={styles['desktop-screens']}>
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          modules={[Autoplay]}
          breakpoints={{
            368: {
              width: 368,
              slidesPerView: 1.2,
            },
            1024: {
              width: 1024,
              slidesPerView: 1.5,
            },
            1400: {
              width: 1400,
              slidesPerView: 1.5,
            },
            1600: {
              width: 1600,
              slidesPerView: 1.5,
            },
            1800: {
              width: 1800,
              slidesPerView: 1.5,
            },
          }}
          autoplay={{
            disableOnInteraction: false,
            delay: 1,
          }}
          speed={3000}
          loop
          className={styles['mobile-screen-swipe']}
        >
          {slidersListLeft.map(
            ({ id, tiltMaxAngleX, tiltMaxAngleY, perspective, transitionSpeed, scale, screen }) => {
              return (
                <SwiperSlide key={id}>
                  <Tilt
                    tiltEnable={!isMobile}
                    className="parallax-effect-img"
                    tiltMaxAngleX={tiltMaxAngleX}
                    tiltMaxAngleY={tiltMaxAngleY}
                    perspective={perspective}
                    transitionSpeed={transitionSpeed}
                    scale={scale}
                  >
                    <div className={styles['screen-image']}>
                      <Image src={screen} layout="fill" />
                    </div>
                  </Tilt>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
      <div className={styles['mobile-screens-overlay']}>
        <div className="container">
          <div className="section-heading">
            <h3>{t('responsiveDesign')}</h3>
          </div>
        </div>
        <div className={styles['mobile-screens']}>
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
              disableOnInteraction: false,
              delay: 1,
            }}
            breakpoints={{
              360: {
                width: 360,
                slidesPerView: 1.5,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1024: {
                width: 1024,
                slidesPerView: 4,
              },
              1400: {
                width: 1400,
                slidesPerView: 4,
              },
              1600: {
                width: 1600,
                slidesPerView: 4,
              },
              1800: {
                width: 1800,
                slidesPerView: 4,
              },
            }}
            speed={3000}
            loop
            className={styles['mobile-screen-swipe']}
          >
            {slidersMobileList.map(
              ({
                id,
                tiltMaxAngleX,
                tiltMaxAngleY,
                perspective,
                transitionSpeed,
                scale,
                mobileScreen,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <Tilt
                      tiltEnable={!isMobile}
                      className="parallax-effect-img"
                      tiltMaxAngleX={tiltMaxAngleX}
                      tiltMaxAngleY={tiltMaxAngleY}
                      perspective={perspective}
                      transitionSpeed={transitionSpeed}
                      scale={scale}
                    >
                      <div className={styles['mobile-image']}>
                        <Image src={mobileScreen} layout="fill" />
                      </div>
                    </Tilt>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  isSmallTablet: PropTypes.bool,
};
