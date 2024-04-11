import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { ServiceBlogList } from './Constants/constants';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['featured-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>Featured Content</h2>
        </div>
        <div className={styles['featured-section_mainpanel']}>
          <Swiper
            slidesPerView={1}
            modules={[Navigation]}
            spaceBetween={30}
            navigation={{
              prevEl: '.featured-prev',
              nextEl: '.featured-next',
            }}
          >
            {ServiceBlogList.map((swiper, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={`col_ ${styles['featured-items']}`}>
                    {swiper.map(({ id, title, description }) => {
                      return (
                        <div className={`col_ ${styles['featured-item']}`} key={id}>
                          <div className={styles['featured-item-name']}>
                            <h3>{title}</h3>
                          </div>
                          <div className={styles['featured-item-description']}>
                            <p>{description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={`swiper-buttons-overlay ${styles['featured-buttons-overlay']}`}>
            <div className="swiper-button-custom-prev featured-prev swiper-button-custom" />
            <div className="swiper-button-custom-next featured-next swiper-button-custom" />
          </div>
        </div>
      </div>
    </section>
  );
};
