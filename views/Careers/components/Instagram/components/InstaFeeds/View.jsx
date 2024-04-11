import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper';
import Feed from '../Feed';
import PopupSlider from '../../../../../../components/Culture/components/PopupSlider';
import styles from '../InstagramSwiper/style.module.scss';

export const View = ({ feeds, isOpen, toggleModal, activeImageId, handleChangeOffset, t }) => {
  return (
    <section className={styles['culture-section']}>
      <div className="container">
        <div className="section-heading">
          <h4>{t('aimitInstagram')}</h4>
        </div>
      </div>
      <div className={styles['swiper-overlay']}>
        <Swiper
          slidesPerView="auto"
          navigation={{
            prevEl: '.culture-prev',
            nextEl: '.culture-next',
          }}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation]}
          breakpoints={{
            360: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          onActiveIndexChange={(e) => {
            handleChangeOffset(e.activeIndex);
          }}
        >
          {feeds?.map((feed, id) => {
            return (
              <SwiperSlide key={id}>
                <div
                  onClick={() => {
                    toggleModal(id);
                  }}
                >
                  <Feed key={id} feed={feed} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="container">
        <div className={`swiper-buttons-overlay ${styles['culture-button-overlay']}`}>
          <div className="swiper-button-custom-prev culture-prev swiper-button-custom" />
          <div className="swiper-button-custom-next culture-next swiper-button-custom" />
        </div>
      </div>

      <PopupSlider
        feeds={feeds}
        isOpen={isOpen}
        toggleModal={toggleModal}
        activeImageId={activeImageId}
        handleChangeOffset={handleChangeOffset}
      />
    </section>
  );
};

View.propTypes = {
  feeds: PropTypes.array,
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  handleChangeOffset: PropTypes.func,
  t: PropTypes.func,
  activeImageId: PropTypes.number,
};
