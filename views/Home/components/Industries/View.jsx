import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import PropTypes from 'prop-types';
import PrimaryButton from '../../../../components/PrimaryButton';
import Industries from '../../../../components/Industries';
import FormModal from '../../../../components/GetInTouch/Components/FormModal';
import { industriesList } from './Constants/constants';
import styles from './style.module.scss';

export const View = ({ isOpen, toggleModal, t }) => {
  return (
    <section className={styles['industries-section']}>
      <div className="container-big">
        <div className={styles['industries-section-mainpanel']}>
          <div className="section-heading">
            <h2>{t('ourIndustries')}</h2>
          </div>
          <div className={styles['industries-section_mainpanel']}>
            <div className={styles.industriesSwiper_overaly}>
              <Swiper
                slidesPerView={1}
                spaceBetween={26}
                navigation={{
                  prevEl: '.industries-prev',
                  nextEl: '.industries-next',
                }}
                modules={[Navigation]}
                className={styles.industries_swipe}
              >
                {industriesList.map((industries, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={styles.industriesItems}>
                        {industries.map(({ id, title, description }) => {
                          return (
                            <div key={id} className={`col_ ${styles.industriesItemOverlay}`}>
                              <Industries title={t(title)} description={t(description)} />
                            </div>
                          );
                        })}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className={styles.industries_button}>
            <PrimaryButton text={t('getInTouch')} onClick={toggleModal} />
          </div>
          <div className={`swiper-buttons-overlay ${styles['industries-buttons-overlay']}`}>
            <div className="swiper-button-custom-prev industries-prev swiper-button-custom" />
            <div className="swiper-button-custom-next industries-next swiper-button-custom" />
          </div>
        </div>
        <FormModal isOpen={isOpen} toggleModal={toggleModal} />
      </div>
    </section>
  );
};

View.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  t: PropTypes.func,
};
