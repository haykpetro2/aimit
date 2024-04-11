import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Grid, Navigation } from 'swiper';
import PropTypes from 'prop-types';
import PopupSlider from './components/PopupSlider';
import { images } from '../../constants/images';
import 'swiper/css';
import 'swiper/css/navigation';
import { SCREENS } from '../../constants/constants';

import styles from './style.module.scss';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const View = ({ isOpen, toggleModal, activeImageId, t, title, description }) => {
  const isMobile = useMediaQuery(SCREENS.isMobile);

  return (
    <section className={styles['culture-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t(title)}</h2>
        </div>
        <div className={styles['culture-description']}>
          <div className="description">
            <p>{t(description)}</p>
          </div>
        </div>

        <div className={styles['culture-section-mainpanel']}>
          <div className={styles['swiper-overlay']}>
            <Swiper
              slidesPerView="auto"
              grid={{
                rows: !isMobile ? 2 : 3,
                fill: 'row',
              }}
              navigation={{
                prevEl: '.culture-prev',
                nextEl: '.culture-next',
              }}
              spaceBetween={26}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Navigation]}
              className={styles['culture-swipe']}
              breakpoints={{
                360: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {images.map(({ media_url, id }) => {
                return (
                  <SwiperSlide key={id}>
                    <div onClick={() => toggleModal(id)} className={styles['culture-image']}>
                      <Image src={media_url} layout="fill" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={`swiper-buttons-overlay ${styles['culture-button-overlay']}`}>
            <div className="swiper-button-custom-prev culture-prev swiper-button-custom" />
            <div className="swiper-button-custom-next culture-next swiper-button-custom" />
          </div>
        </div>
      </div>
      <PopupSlider isOpen={isOpen} toggleModal={toggleModal} activeImageId={activeImageId} />
    </section>
  );
};

View.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  activeImageId: PropTypes.number,
  t: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};
