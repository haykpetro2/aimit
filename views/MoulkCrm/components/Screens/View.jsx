import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ pagination, t }) => {
  return (
    <section className={styles['screens-section']}>
      <div className="container">
        <div className={`section-heading ${styles['section-headline']}`}>
          <h3>{t('screens')}</h3>
        </div>
        <div className={styles['section-mainpanel']}>
          <Swiper pagination={pagination} modules={[Pagination]} className={styles['screen-swipe']}>
            <SwiperSlide>
              <div className={styles['screen-image']}>
                <Image src="/images/uploads/crm_slide1.png" layout="fill" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles['screen-image']}>
                <Image src="/images/uploads/crm_slide2.png" layout="fill" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles['screen-image']}>
                <Image src="/images/uploads/crm_slidethree.png" layout="fill" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  pagination: PropTypes.object,
  t: PropTypes.func,
};
