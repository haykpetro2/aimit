import React from 'react';
import Image from 'next/image';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tilt from 'react-parallax-tilt';
import 'swiper/css';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import { SCREENS } from '../../../../constants/constants';
import { slidersListLeft, slidersListRight, slidersMobileList } from './Constants/constants';
import styles from './style.module.scss';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';

export const View = ({ t, isSmallTablet }) => {
  const isMobile = useMediaQuery(SCREENS.isMobile);
  return (
    <section className={styles['screens-section']}>
      <div className="container">
        <div className={styles['hero-headline']}>
          <h3>{t('screens')}</h3>
        </div>
      </div>
      <div className={styles['screens-mainpanel']}>
        {!isSmallTablet ? (
          <>
            <div className={styles['screens-slider']}>
              <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                spaceBetween={40}
                autoplay={{
                  disableOnInteraction: false,
                  delay: 1,
                }}
                speed={3000}
                loop
                className={styles['screen-swipe']}
              >
                {slidersListLeft.map(
                  ({
                    id,
                    tiltMaxAngleX,
                    tiltMaxAngleY,
                    perspective,
                    transitionSpeed,
                    scale,
                    screen,
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
            <div className={styles['screens-slider']}>
              <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                spaceBetween={40}
                autoplay={{
                  disableOnInteraction: false,
                  delay: 1,
                  reverseDirection: true,
                }}
                speed={5000}
                loop
                className={styles['screen-swipe-second']}
              >
                {slidersListRight.map(
                  ({
                    id,
                    tiltMaxAngleX,
                    tiltMaxAngleY,
                    perspective,
                    transitionSpeed,
                    scale,
                    screen,
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
            <div className="container">
              <div className={styles['screens-count']}>
                <p>8+ screens</p>
              </div>
            </div>
            <div className={styles['mobile-screens']}>
              <Swiper
                modules={[Autoplay]}
                slidesPerView={5.5}
                spaceBetween={20}
                autoplay={{
                  disableOnInteraction: false,
                  delay: 1,
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
                          <div className={styles['screen-image']}>
                            <Image src={mobileScreen} layout="fill" alt="" />
                          </div>
                        </Tilt>
                      </SwiperSlide>
                    );
                  }
                )}
              </Swiper>
            </div>
          </>
        ) : (
          <div className="container">
            {slidersListRight.map(({ screen, id }) => {
              return (
                <div key={id} className={styles['screen-image']}>
                  <Image src={screen} layout="fill" />
                </div>
              );
            })}
            {slidersListLeft.map(({ screen, id }) => {
              return (
                <div key={id} className={styles['screen-image']}>
                  <Image src={screen} layout="fill" />
                </div>
              );
            })}
            <div className={styles['mobile-screens']}>
              {slidersMobileList.map(({ mobileScreen, id }) => {
                return (
                  <div key={id} className={`col_ ${styles['mobile-screen-image']}`}>
                    <Image src={mobileScreen} layout="fill" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  isSmallTablet: PropTypes.bool,
};
