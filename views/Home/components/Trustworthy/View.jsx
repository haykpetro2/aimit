import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['trustworthy-section']}>
      <div className="container">
        <div className={styles['trustworthy-section_mainpanel']}>
          <div className={styles['trustworthy-section_headline']}>
            <div className="section-heading">
              <h2>{t('reliable')}</h2>
            </div>
            <div className={styles['trustworthy-section_description']}>
              <p>{t('reliableText')}</p>
            </div>
          </div>
          <div className={styles['trusworthy-swiper']}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={14}
              speed={2000}
              loop
              autoplay={{
                disableOnInteraction: false,
                delay: 1,
              }}
              breakpoints={{
                360: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3.5,
                },
                1024: {
                  slidesPerView: 4.5,
                },
                1400: {
                  slidesPerView: 5.5,
                },
              }}
            >
              <SwiperSlide>
                <div className={styles.trImagge}>
                  <Image
                    layout="fill"
                    src="/images/uploads/trousworthy1.png"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.trImagge}>
                  <Image
                    layout="fill"
                    src="/images/uploads/trousworthy2.png"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.trImagge}>
                  <Image
                    layout="fill"
                    src="/images/uploads/trousworthy3.png"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.trImagge}>
                  <Image
                    layout="fill"
                    src="/images/uploads/trousworthy4.png"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.trImagge}>
                  <Image
                    layout="fill"
                    src="/images/uploads/trousworthy5.png"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.trImagge}>
                  <Image
                    layout="fill"
                    src="/images/uploads/trousworthy6.png"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.trImagge}>
                  <Image
                    layout="fill"
                    src="/images/uploads/trousworthy7.png"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.trImagge}>
                  <Image
                    layout="fill"
                    src="/images/uploads/trousworthy8.png"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.trImagge}>
                  <Image
                    layout="fill"
                    src="/images/uploads/trousworthy9.png"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.trImagge}>
                  <Image
                    layout="fill"
                    src="/images/uploads/trousworthy10.png"
                    alt="Picture of the author"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
